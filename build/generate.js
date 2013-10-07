/**
 * searchmetrics endpoint generator from api docs
 *
 * @author Martin Lantzsch <martin@linux-doku.de>
 * @license MIT
 */

var jsdom = require('jsdom');
var fs = require('fs');
var async = require('async');
var jquery = fs.readFileSync('./build/jquery.min.js', 'utf-8');
var baseUrl = 'http://api.searchmetrics.com/';

var endpoints = [];
var generated = 'module.exports = function(searchmetrics) {\n';

var generate = function(url, callback) {
	console.log('request ', url);
	jsdom.env({
		url: baseUrl + url,
		src: [jquery],
		done: function (errors, window) {
			console.log('loaded ', url);
			var $ = window.$
				name = $('#content .grid_9 h1').text();

			/**
			 * remove all double whitespace
			 */
			var removeWhitespace = function(str) {
				while(str.indexOf('  ') !== -1) {
					str = str.replace(/  /g, ' ');
				}
				return str;
			}

			// comment for jsdoc v3
			var shortDescription = $($('#content .grid_9 p')[0]).text(),
				longDescription = function() {
					var elements = $('#content .grid_9 p, #content .grid_9 h2'),
						desc = '';
					for(var i = 1; i < elements.length; i++) {
					 	var e = $(elements[i]);
						if(e.is('p') && e.text() != '') {
					    	desc += e.text().replace(/\n/g, ' ') + ' ';
						} else if(e.is('h2')) {
							break;
						}
					}
					return removeWhitespace(desc);
				}(),
				params = $('#content .grid_9 .service-parameters tr').not(':nth-child(1)').length;

			var doc = '\t/**\n';
				doc += '\t * ' + longDescription + '\n';
				doc += '\t * @summary ' + shortDescription + '\n';

			if(params > 0) {
				doc += '\t * @param {Object} query The query parameters which will be sent to the api\n';
			
				$('#content .grid_9 .service-parameters tr').not(':nth-child(1)').each(function() {
					var paramRequired = $(this).hasClass('required'),
						paramName = $(this).find('td:nth-child(1) strong').text(),
						paramDescription = removeWhitespace($('<div>' + $(this).find('td:nth-child(2)').html().replace(/<p><\/p>|<br \/>|<br>|\n/g, ' ') + '</div>').text()),
						paramType = $(this).find('td:nth-child(2) em').text();

					if(paramType != 'Integer' || paramType != 'String') {
						paramType = 'String';
					}

					doc += '\t * @param query.' + paramName + ' {' + paramType + (paramRequired == false ? '=' : '') + '} ' + paramDescription + '\n';
				});
			}

			doc += '\t * @param {searchmetrics~ApiCallback} callback\n';
			doc += '\t * @see {@link ' + baseUrl.slice(0, baseUrl.length - 1) + url + '}\n';
			doc += '\t */\n';

			// source code of the function
			var source = '';

			if(params > 0) {
				source += '\tsearchmetrics.prototype.' + name.charAt(0).toLowerCase() + name.slice(1) + ' = function(query, callback) {\n';
				source += '\t\tthis.request(\'' + name + '\', query, callback);\n';
				source += '\t}\n';
			} else {
				source += '\tsearchmetrics.prototype.' + name.charAt(0).toLowerCase() + name.slice(1) + ' = function(callback) {\n';
				source += '\t\tthis.request(\'' + name + '\', callback);\n';
				source += '\t}\n';
			}

			generated += doc + source + '\n';
			console.log('finished ', url);
			window.close();
			callback();
		}
	})
}

// loop over all endpoint urls and generate jsdoc comment + source
// after all heavy looping and generating save the fresh generated
// source to "endpoints.js"
var work = function() {
	async.eachSeries(endpoints, generate, function(err) {
		if(err) throw err;
		generated += '};';
		fs.writeFile('endpoints.js', generated, function(err) {
			if(err) throw err;
			console.log('endpoints.js saved!');
		});
	});
}

// loop through all endpoints in the documentation
console.log('request', 'all api calls');
jsdom.env({
	url: baseUrl + 'api-calls',
	src: [jquery],
	done: function (errors, window) {
		console.log('loaded ', baseUrl + 'api-calls');

		var $ = window.$;

		$('#left_nav .sc li a').each(function() {
			endpoints.push($(this).attr('href'));
		})
		.promise()
		.done(work);

		window.close();
	}
});