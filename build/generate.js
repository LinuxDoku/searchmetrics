/**
 * searchmetrics endpoint generator from api docs
 *
 * @author Martin Lantzsch <martin@linux-doku.de>
 * @license MIT
 */

var jsdom = require('jsdom');
var fs = require('fs');
var async = require('async');
var jqueryUrl = 'http://code.jquery.com/jquery.js';
var baseUrl = 'http://api.searchmetrics.com/';

var endpoints = [];
var generated = 'module.exports = function(searchmetrics) {';

var generate = function(url, callback) {
	console.log('request ', url);
	jsdom.env({
		url: baseUrl + url,
		scripts: [jqueryUrl],
		done: function (errors, window) {
			console.log('loaded ', url);
			var $ = window.$;

			var name = $('#content .grid_9 h1').text();

			// comment for jsdoc v3
			var shortDescription = $($('#content .grid_9 p')[0]).text();
			var longDescription = $($('#content .grid_9 p')[1]).text();
			var params = $('#content .grid_9 .service-parameters tr').not(':nth-child(1)').length;

			var doc = '\t/**\n'
			doc += '\t * ' + longDescription + '\n';
			doc += '\t * @summary ' + shortDescription + '\n';

			if(params > 0) {
				doc += '\t * @param {Object} query The query parameters which will be sent to the api\n';
			
				$('#content .grid_9 .service-parameters tr').not(':nth-child(1)').each(function() {
					var paramRequired = $(this).hasClass('required');
					var paramName = $(this).find('td:nth-child(1) strong').text();
					var paramDescription = $(this).find('td:nth-child(2)').text();
					var paramType = $(this).find('td:nth-child(2) em').text();

					if(paramType != 'Integer' || paramType != 'String') {
						paramType = 'String';
					}

					doc += '\t * @param query.' + paramName + ' {' + paramType + (paramRequired == false ? '=' : '') + '} ' + paramDescription + '\n';
				});
			}

			doc += '\t * @param {searchmetrics~ApiCallback} callback\n';
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
	url: baseUrl + 'api-calls/',
	scripts: [jqueryUrl],
	done: function (errors, window) {
		console.log('loaded ', baseUrl + 'api-calls/');

		var $ = window.$;

		$('#left_nav .sc li a').each(function() {
			endpoints.push($(this).attr('href'));
		})
		.promise()
		.done(work);

		window.close();
	}
});