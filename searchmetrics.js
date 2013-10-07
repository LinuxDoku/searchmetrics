var OAuth = require('OAuth'),
	url = require('url');

/**
 * searchmetrics api client for node
 * 
 * @class
 * @author Martin Lantzsch <martin@linux-doku.de>
 * @param {String} apiKey your api key which you have generated on the searchmetrics website
 * @param {String} apiSecret your api secret which you have generated on the searchmetrics website
 */
var searchmetrics = function searchmetrics(apiKey, apiSecret) {
	this.apiUrl = 'http://api.searchmetrics.com/v1/';

	// create a new oauth object with key and secret and set some type headers
	this.oauth = new OAuth.OAuth(
		null,
		null,
		apiKey,
		apiSecret,
		'1.0A',
		null,
		'HMAC-SHA1',
		null,
		{
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	);

	/**
	 * request data from searchmetrics api
	 * @param  {String}   endpointUrl endpoint url without api url itself and query string, e.g. ResearchOrganicGetListCompetitors
	 * @param  {Object}   query an object of all url query parameters the api accepts (see documentation of each function)
	 * @param  {searchmetrics~apiCallback} callback callback function whith is called when all worked
	 * @methodOf searchmetrics
	 * @private
	 */
	this.request = function(endpointUrl, query, callback) {
		// build query string from query object
		var urlQuery = url.format({
			query: query
		});
		// fire oauth get request with json encoded response
		this.oauth.get(this.apiUrl + endpointUrl + '.json/' + urlQuery, null, null,
			function(err, data) {
				if(err) console.error(err);
				callback(JSON.parse(data));
			}
		) 
	}
}

/**
 * This callback is invoked when the api call was successfull and returns all the data
 * @callback searchmetrics~apiCallback
 * @param {object} data the response data from the api servers
 */

require('./endpoints.js')(searchmetrics);

module.exports = searchmetrics;