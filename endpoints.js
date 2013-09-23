module.exports = (function(searchmetrics) {
/**
 * This call returns the number of organic keywords with a ranking in the organic search results in Google for a given domain and a given country, based on the last month available in our database.
 * @summary Number of organic keywords for a given domain.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc
 * @param query.url {String} Either a domain or a subdomainFormat: domain.tld, subdomain.domain.tld
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetCountDomainKeyword = function(query, callback) {
	this.request('ResearchOrganicGetCountDomainKeyword', query, callback);
}

/**
 * This call returns the number of organic keywords with a ranking in the organic search results in Google for a given domain and a given country and a given month.
Please note that a certain subscription level may be needed to use this call.
 * @summary Number of organic keywords for a given domain with filter options.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.url {String} Either a domain or a subdomainFormat: domain.tld,. subdomain.domain.tld
 * @param query.year_month {String} DateFormat: YYYYMM
 * @param query.position_from {String=} Filter: Lowest ranking of keywords that should be considered in the count.
E.g. if you want to count all keywords starting from the position 4 (meaning 4,5,6 etc.) this parameter has to be set to "4".Format: 1,2,3 etc.
 * @param query.position_to {String=} Filter: Highest ranking of keywords that should be considered in the count. 
E.g. if you want to count all keywords up to position 3 ( resulting in all keywords with a SERP of 1, 2 or 3) this parameter has to be set to "3".Format: 2,3,4 etc
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetCountDomainKeywordFilter = function(query, callback) {
	this.request('ResearchOrganicGetCountDomainKeywordFilter', query, callback);
}

/**
 * This call returns the number of organic keywords with a ranking in the organic search results in Google for a given domain and a given country and a given month.
Please note that a certain subscription level may be needed to use this call.
 * @summary Number of organic keywords for a given domain with access to historic data.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.url {String} Either a domain or a subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.year_month {String} DateFormat: YYYYMM
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetCountDomainKeywordHistoric = function(query, callback) {
	this.request('ResearchOrganicGetCountDomainKeywordHistoric', query, callback);
}

/**
 * Get a list of the most relevant shared keywords in the organic search results for two URLs.
 * @summary Overview comparison of the most relevant shared keywords (comeptititve keywords) for two URLs in organic search results.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url_1 {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.url_2 {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10.Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListCommonKeywords = function(query, callback) {
	this.request('ResearchOrganicGetListCommonKeywords', query, callback);
}

/**
 * This call returns the competitors in the organic search. A competitor is defined as a domain that shows up in the organic search results for a keyword for which the original domain has a ranking as well.
 * @summary Competitor domains in the organic search
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Either a domain or subdomainFormat: domain.ltd, subdomain.domain.ltd
 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR".Format: EUR, USD etc.
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10.Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListCompetitors = function(query, callback) {
	this.request('ResearchOrganicGetListCompetitors', query, callback);
}

/**
 * Searchmetrics organizes all analyzed keywords into standard industry sectors. The Industry Spread shows the distribution of all keywords of a domain on the different industry sectors.
 * @summary Industry sector classification of a domain
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListIndustrySpread = function(query, callback) {
	this.request('ResearchOrganicGetListIndustrySpread', query, callback);
}

/**
 * This call returns a list keywords of a domain that had rankings in the organic search results in Google in a given country, based on the latest month available in our database. 
 * @summary Keyword rankings for a given domain in organic search results.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListRankingsDomain = function(query, callback) {
	this.request('ResearchOrganicGetListRankingsDomain', query, callback);
}

/**
 * This call returns a list keywords of a domain that had rankings in the organic search results in Google in a given country, based on the latest data in our database. 
Please note that a certain subscription level may be needed to use this call.
 * @summary Keyword rankings for a given domain in organic search results with filter options.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.url {String} Either a domain or a subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR".Format: EUR, USD etc.
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"Format: integer
 * @param query.position_from {String=} Filter: Lowest ranking of keywords that should be returned.
E.g. if you want all keywords starting from the position 4 (meaning 4,5,6 etc.) this parameter has to be set to "4".Format: string
 * @param query.position_to {String=} Filter: Highest ranking of keywords that should be returned.
E.g. if you want all keywords up to position 3 ( resulting in all keywords with a SERP of 1, 2 or 3) this parameter has to be set to "3".Format: string
 * @param query.search_volume_monthly_from {String=} Filter: Lowest monthly search volume in Google for returned keywords.
E.g. if you want all keywords with a minimum estimated search volume of 300  this parameter has to be set to "300".Format: integer
 * @param query.search_volume_monthly_to {String=} Filter: Highest estimated monthly search volume for returned keywords.
E.g. if you want all keywords with a maximum estimated monthly search volume of 1000 this parameter has to be set to "1000".Format: integer
 * @param query.traffic_monthly_from {String=} Filter: Lowest estimated traffic for returned keywords.
E.g. if you want all keywords with a minimum estimated traffic of 300 visitors this parameter has to be set to "300".Format: integer
 * @param query.traffic_monthly_to {String=} Filter: Highest estimated traffic for returned keywords.
E.g. if you want all keywords with a maximum estimated traffic of 1000 visitors this parameter has to be set to "1000".Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListRankingsDomainFilter = function(query, callback) {
	this.request('ResearchOrganicGetListRankingsDomainFilter', query, callback);
}

/**
 * This call returns a list keywords of a domain that had rankings in the organic search results in Google in a given country in a given week.
Please note that a certain subscription level may be needed to use this call.
 * @summary Historic keyword rankings for a given domain in organic search results.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.date {String} DateFormat: YYYYMMDD
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR".Format: EUR, USD etc.
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListRankingsDomainHistoric = function(query, callback) {
	this.request('ResearchOrganicGetListRankingsDomainHistoric', query, callback);
}

/**
 * This call returns a list of Google's organic rankings for a given keyword, based on the latest month available in our database and ordered by position in ascending order. As well a trend in comparison to the previous month is returned.
 * @summary Rankings for a given keyword in organic search results.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.keyword {String} Keyword for which the rankings are determinedFormat: string
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListRankingsKeyword = function(query, callback) {
	this.request('ResearchOrganicGetListRankingsKeyword', query, callback);
}

/**
 * This call returns a list of Google's organic rankings for a given keyword, based on the latest month available in our database and ordered by position in ascending order. As well a trend in comparison to the previous month is returned.
Please note that a certain subscription level may be needed to use this call.
 * @summary Historic rankings for a given keyword in organic search results.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.date {String} DateFormat: YYYYMMDD
 * @param query.keyword {String} Keyword for which the rankings are determinedFormat: string
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListRankingsKeywordHistoric = function(query, callback) {
	this.request('ResearchOrganicGetListRankingsKeywordHistoric', query, callback);
}

/**
 * This call returns the Searchmetrics Visibility in the organic search for a domain for a specified country based for a given timeframe.
 * @summary Searchmetrics SEO Visibility for a given URL in a given country in a given timeframe.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc
 * @param query.date_from {String} Start date from which the SEO Visibility should be queriedFormat: YYYYMMDD
 * @param query.date_to {String} End date to which the SEO Visibility should be queriedFormat: YYYYMMDD
 * @param query.url {String} Domain for which the SEO Visibility is queriedFormat: domain.tld, subdomain.domain.tld
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListSeoVisibilityHistoric = function(query, callback) {
	this.request('ResearchOrganicGetListSeoVisibilityHistoric', query, callback);
}

/**
 * This call returns the domains with the largest absolute visibility losses for organic search results in the previous week in a given country.
 * @summary Top100 Searchmetrics Organic Visibility losers in a given country
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListSeoVisibilityTop100Losers = function(query, callback) {
	this.request('ResearchOrganicGetListSeoVisibilityTop100Losers', query, callback);
}

/**
 * This call returns the domains with the largest absolute visibility losses for organic search results in the previous week in a given country and a given date.
Please note that a certain subscription level may be needed to use this call.
 * @summary Top100 Searchmetrics Organic Visibility losers in a given country and a given date
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.date {String} DateFormat: YYYYMMDD
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListSeoVisibilityTop100LosersHistoric = function(query, callback) {
	this.request('ResearchOrganicGetListSeoVisibilityTop100LosersHistoric', query, callback);
}

/**
 * This call returns the domains with the largest absolute visibility gains for organic search results in the previous week in a given country.
 * @summary Top100 Organic Visibility winners in a given country
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListSeoVisibilityTop100Winners = function(query, callback) {
	this.request('ResearchOrganicGetListSeoVisibilityTop100Winners', query, callback);
}

/**
 * This call returns the domains with the largest absolute visibility gains for organic search results in the previous week in a given country and a given date.
Please note that a certain subscription level may be needed to use this call.
 * @summary Top100 Organic Visibility winners in a given country for a given date
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.date {String} DateFormat: YYYYMMDD
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListSeoVisibilityTop100WinnersHistoric = function(query, callback) {
	this.request('ResearchOrganicGetListSeoVisibilityTop100WinnersHistoric', query, callback);
}

/**
 * This data represents the relative distribution of a site's search results (SERPs) in Google in a given country based on the latest data in our database. 
 * @summary Ranking distribution of identified keywords in a given country.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} URL for which the SEO Visibility is determined. The Visibility can be queried for a domain, a subdomain or a directory. For a domain, subdomain or directory all belonging sub-pages are included in the calculation.Format: domain.tld, subdomain.domain.tld, domain.tld/directory
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListSerpSpread = function(query, callback) {
	this.request('ResearchOrganicGetListSerpSpread', query, callback);
}

/**
 * This call returns the Subdomains in the organic search. A subdomain is defined with the domain in the organic search results.
 * @summary Subdomains for one given domain
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Get a domainFormat: domain.tld
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10.Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetListSubdomains = function(query, callback) {
	this.request('ResearchOrganicGetListSubdomains', query, callback);
}

/**
 * This call returns the SEO Visibility rank (SEORank) for a domain in a given country. The rank represents the position of the domain in the top 100,000 SEO Visibility list for the country.
 * @summary SEO Visibility rank of the domain (SEORank)
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc
 * @param query.url {String} DomainFormat: domain.tld
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetValueSeoRank = function(query, callback) {
	this.request('ResearchOrganicGetValueSeoRank', query, callback);
}

/**
 * This call returns the Searchmetrics Visibility in the organic search for a domain for a specified country based on the latest data in our database. In addition, a trend in comparision to the previous week is delivered.
 * @summary Searchmetrics SEO Visibility for a given URL in a given country.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} URL for which the SEO Visibility is determined. The Visibility can be queried for a domain, a subdomain or a directory. For a domain, subdomain or directory all belonging sub-pages are included in the calculation.Format: domain.tld, subdomain.domain.tld or domain.tld/directory/
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetValueSeoVisibility = function(query, callback) {
	this.request('ResearchOrganicGetValueSeoVisibility', query, callback);
}

/**
 * This call returns the Searchmetrics Visibility across all countries for a domain in the organic search, based on the latest data in our database.
 * @summary Searchmetrics SEO Worldwide Visibility for a given URL.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} URL for which the SEO Visibility is determined. The URL can be either an domain, a subdomain or a directory. For a domain, subdomain or directory all belonging sub-pages are included in the calculation.Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetValueSeoVisibilityWorld = function(query, callback) {
	this.request('ResearchOrganicGetValueSeoVisibilityWorld', query, callback);
}

/**
 * Returns the estimated cost of organic traffic if it was gained through Google AdWords advertising (for the last 2 complete months available in our database).
 * @summary Estimated paid value of organic search traffic.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} Country code as specified in ISO 3166-1Format: US, GB, DE etc
 * @param query.url {String} The domain or subdomain for which the traffic value is estimated.Format: domain.tld, subdomain.domain.tld
 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR".Format: USD, EUR etc.
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchOrganicGetValueTrafficValue = function(query, callback) {
	this.request('ResearchOrganicGetValueTrafficValue', query, callback);
}

/**
 * This call returns search-related information for a given keyword for a given country for the current month.
 * @summary Search volume, CPC etc. for a given keyword
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.keyword {String} Keyword for which info should be queried.Format: string
 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR".Format: EUR, USD etc.
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchKeywordsGetListKeywordinfo = function(query, callback) {
	this.request('ResearchKeywordsGetListKeywordinfo', query, callback);
}

/**
 * This call returns search-related information for a given keyword for a given country for the specified month.
Please note that a certain subscription level may be needed to use this call.
 * @summary Historic search volume, CPC etc. for a given keyword
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.keyword {String} Keyword for which info should be queried.Format: string
 * @param query.year_month {String} DateFormat: YYYYMM
 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR".Format: EUR, USD etc.
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchKeywordsGetListKeywordinfoHistoric = function(query, callback) {
	this.request('ResearchKeywordsGetListKeywordinfoHistoric', query, callback);
}

/**
 * This call returns the keywords with the biggest losses in absolute search volumes in comparison to the previous week for a given domain.
 * @summary Keywords with the highest absolute losses in organic search traffic for a given domain
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10.Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchKeywordsGetListLosers = function(query, callback) {
	this.request('ResearchKeywordsGetListLosers', query, callback);
}

/**
 * This call returns the keywords with the biggest losses in absolute search volumes in comparison to the previous week for a given domain for a given point in time.
Please note that a certain subscription level may be needed to use this call.
 * @summary Keywords with the highest absolute losses in organic search traffic for a given domain with filter options
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.date {String} Date for which the winners are queriedFormat: YYYYMMDD
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.cpc_from {String=} Filter: Lowest estimated CPC for returned keywords.
E.g. if you want all keywords with a minimum estimated CPC of 1€ visitors this parameter has to be set to "1".Format: integer
 * @param query.cpc_to {String=} Filter: Highest estimated CPC for returned keywords.
E.g. if you want all keywords with a maximum estimated CPC of 2 this parameter has to be set to "2".Format: integer
 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR".Format: EUR, USD etc.
 * @param query.delta_position_from {String=} Filter: Lowest change in position of a keyword that should be returned.
E.g. if you want all keywords with a change of 4 or less positions this parameter has to be set to "-4".Format: integer
 * @param query.delta_position_to {String=} Filter: Highest change in position of a keyword that should be returned.
E.g. if you want all keywords with a change of 10 or more positions this parameter has to be set to "-10".Format: integer
 * @param query.delta_traffic_from {String=} Filter: Lowest change in traffic of a keyword that should be returned.
E.g. if you want all keywords with a change of 50 or less visitors this parameter has to be set to "-50".Format: integer
 * @param query.delta_traffic_to {String=} Filter: Highest change in traffic of a keyword that should be returned.
E.g. if you want all keywords with a change of 1000 or more visitors this parameter has to be set to "-1000".Format: integer
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10.Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0.Format: integer
 * @param query.position_from {String=} Filter: Lowest ranking of keywords that should be returned.
E.g. if you want all keywords starting from the position 4 (meaning 4,5,6 etc.) this parameter has to be set to "4".Format: integer
 * @param query.position_to {String=} Filter: Highest ranking of keywords that should be returned.
E.g. if you want all keywords up to position 3 ( resulting in all keywords with a SERP of 1, 2 or 3) this parameter has to be set to "3".Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchKeywordsGetListLosersFilter = function(query, callback) {
	this.request('ResearchKeywordsGetListLosersFilter', query, callback);
}

/**
 * This call returns the keywords with the biggest losses in absolute search volumes in comparison to the previous week for a given domain for a given date
Please note that a certain subscription level may be needed to use this call.
 * @summary Keywords with the highest absolute losses in organic search traffic for a given domain for a given date
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.date {String} Date from which the SEO Visibility losers should be queriedFormat: YYYYMMDD
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10.Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchKeywordsGetListLosersHistoric = function(query, callback) {
	this.request('ResearchKeywordsGetListLosersHistoric', query, callback);
}

/**
 * This call returns related keywords to a given term, meaning words that have a semantic similarity to the given term. For the given term "car" e.g. "auto" could be returned.
 * @summary List of keywords related to a given keyword.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.keyword {String} Keyword that is used as a basis to deliver related keywordsFormat: string
 * @param query.limit {String=} Determines the number of result rows. 
Allowed values  result are 10/25/50/100/250.
Default value is 10.Format: integer
 * @param query.offset {String=} Offset for result set, default is 0. Has to be a multiple of allowed values for the parameter "limit".Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchKeywordsGetListRelatedKeywords = function(query, callback) {
	this.request('ResearchKeywordsGetListRelatedKeywords', query, callback);
}

/**
 * This service returns keywords that contain a given term within a word or phrase. A result example for the given term "auto" would be "automobile" and "auto insurance" .
 * @summary List of keywords that contain a selected keyword.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.keyword {String} keyword that is used to find similar keywordsFormat: string
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 25Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchKeywordsGetListSimilarKeywords = function(query, callback) {
	this.request('ResearchKeywordsGetListSimilarKeywords', query, callback);
}

/**
 * This call returns the keywords with the biggest gains in absolute search volumes in comparison to the previous week for a given domain.
 * @summary Keywords with the highest absolute gains in organic search traffic for a given domain
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10.Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchKeywordsGetListWinners = function(query, callback) {
	this.request('ResearchKeywordsGetListWinners', query, callback);
}

/**
 * This call returns the keywords with the biggest gains in absolute search volumes in comparison to the previous week for a given domain for a given point in time.
Please note that a certain subscription level may be needed to use this call.
 * @summary Keywords with the highest absolute gains in organic search traffic for a given domain with filter options
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.date {String} Date for which the winners are queriedFormat: YYYYMMDD
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.cpc_from {String=} Filter: Lowest estimated CPC for returned keywords.
E.g. if you want all keywords with a minimum estimated CPC of 1€ visitors this parameter has to be set to "1".Format: integer
 * @param query.cpc_to {String=} Filter: Highest estimated CPC for returned keywords.
E.g. if you want all keywords with a maximum estimated CPC of 2 this parameter has to be set to "2".Format: integer
 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR".Format: EUR, USD etc.
 * @param query.delta_position_from {String=} Filter: Lowest change in position of a keyword that should be returned.
E.g. if you want all keywords with a change of 4 or more positions this parameter has to be set to "4".Format: integer
 * @param query.delta_position_to {String=} Filter: Highest change in position of a keyword that should be returned.
E.g. if you want all keywords with a change of 10 or less positions this parameter has to be set to "10".Format: integer
 * @param query.delta_traffic_from {String=} Filter: Lowest change in traffic of a keyword that should be returned.
E.g. if you want all keywords with a change of 50 or more visitors this parameter has to be set to "50".Format: integer
 * @param query.delta_traffic_to {String=} Filter: Highest change in traffic of a keyword that should be returned.
E.g. if you want all keywords with a change of 1000 or less visitors this parameter has to be set to "1000".Format: integer
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10.Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0.Format: integer
 * @param query.position_from {String=} Filter: Lowest ranking of keywords that should be returned.
E.g. if you want all keywords starting from the position 4 (meaning 4,5,6 etc.) this parameter has to be set to "4".Format: integer
 * @param query.position_to {String=} Filter: Highest ranking of keywords that should be returned.
E.g. if you want all keywords up to position 3 ( resulting in all keywords with a SERP of 1, 2 or 3) this parameter has to be set to "3".Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchKeywordsGetListWinnersFilter = function(query, callback) {
	this.request('ResearchKeywordsGetListWinnersFilter', query, callback);
}

/**
 * This call returns the keywords with the biggest gains in absolute search volumes in comparison to the previous week for a given domain for a given point in time.
Please note that a certain subscription level may be needed to use this call.
 * @summary Keywords with the highest absolute gains in organic search traffic for a given domain with access to historic data
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.date {String} DateFormat: YYYYMMDD
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10.Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchKeywordsGetListWinnersHistoric = function(query, callback) {
	this.request('ResearchKeywordsGetListWinnersHistoric', query, callback);
}

/**
 * Returns the number of keywords in Google's paid search for a given domain in a given country for the last month available in our database.
 * @summary Number of paid keywords for a domain in a given country.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Domain for which the number of paid keywords is determined.Format: domain.tld, subdomain.domain.tld
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchPaidGetCountDomainKeyword = function(query, callback) {
	this.request('ResearchPaidGetCountDomainKeyword', query, callback);
}

/**
 * Returns the number of keywords in Google's paid search for a given domain in a given country in a given month. 
 * @summary Number of paid keywords for a domain in a given country with filter options.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.url {String} Domain for which the number of paid keywords is determined.Format: domain.tld, subdomain.domain.tld
 * @param query.year_month {String} month for which the number of paid keywords should be queriedFormat: YYYYMM
 * @param query.position_from {String=} Filter: Lowest ranking of keywords that should be considered in the counting. E.g. if you want to count all keywords starting from the position 4 (meaning 4,5,6 etc.) this parameter has to be set to "4".Format: 1,2,3 etc.
 * @param query.position_to {String=} Filter: Highest ranking of keywords that should be considered in the counting. E.g. if you want to count all keywords up to position 3 ( resulting in all keywords with a SERP of 1, 2 or 3) this parameter has to be set to "3".Format: 2,3,4 etc
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchPaidGetCountDomainKeywordFilter = function(query, callback) {
	this.request('ResearchPaidGetCountDomainKeywordFilter', query, callback);
}

/**
 * Returns the number of keywords in Google's paid search for a given domain in a given country in a given month.
Please note that a certain subscription level may be needed to use this call.
 * @summary Number of paid keywords for a domain in a given country also for previous months,
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.url {String} Domain for which the number of paid keywords is determined.Format: domain.tld, subdomain.domain.tld
 * @param query.year_month {String} DateFormat: YYYYMM
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchPaidGetCountDomainKeywordHistoric = function(query, callback) {
	this.request('ResearchPaidGetCountDomainKeywordHistoric', query, callback);
}

/**
 * This call returns a list of different ad variantions for the queried domain.
 * @summary Get a list of different ad variations
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchPaidGetListAdVariations = function(query, callback) {
	this.request('ResearchPaidGetListAdVariations', query, callback);
}

/**
 * Get a list of the most relevant shared keywords in the paid search results for two URLs.
 * @summary Overview comparison of the most relevant shared keywords (comeptititve keywords) for two URLs in paid search results.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url_1 {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.url_2 {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR".Format: EUR, USD etc.
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10.Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchPaidGetListCommonKeywords = function(query, callback) {
	this.request('ResearchPaidGetListCommonKeywords', query, callback);
}

/**
 * This call returns the competitors in the paid search. A competitor is defined as a domain that shows up in the paid search results for a keyword for which the original domain has a ranking as well.
 * @summary Competitor domains in the paid search
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR".Format: EUR, USD etc.
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10.Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchPaidGetListCompetitors = function(query, callback) {
	this.request('ResearchPaidGetListCompetitors', query, callback);
}

/**
 * This call returns paid keywords associated with advertisements placed for the selected domain.
 * @summary Paid keywords with advertisements for a given domain
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10Format: Integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchPaidGetListKeywords = function(query, callback) {
	this.request('ResearchPaidGetListKeywords', query, callback);
}

/**
 * This call returns paid keywords associated with advertisements placed for the selected domain.
 * @summary Paid keywords with advertisements for a given domain
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10.Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter ""limit""
Default is 0.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchPaidGetListKeywordsLongtail = function(query, callback) {
	this.request('ResearchPaidGetListKeywordsLongtail', query, callback);
}

/**
 * This call returns the Searchmetrics Visibility Rank in the paid Google search for a domain for a specified country in a given timeframe-
 * @summary Searchmetrics Paid Visibility for a given URL and a given country in a given timeframe.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.date_from {String} Start date from which the Paid Visibility should be queriedFormat: YYYYMMDD
 * @param query.date_to {String} End date up to which the Paid Visibility should be queriedFormat: YYYYMMDD
 * @param query.url {String} Domain for which the Paid Visibility is queried.Format: domain.tld, subdomain.domain.tld
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchPaidGetListPaidVisibilityHistoric = function(query, callback) {
	this.request('ResearchPaidGetListPaidVisibilityHistoric', query, callback);
}

/**
 * This call returns a collection of Paid Search key performance indicators (KPIs) for a given country for the last complete month available in our database. 
 * @summary Collection of Paid Search KPIs: paid traffic, ad budget, clicks per day, average CPC, Paid Rank
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Domain for which the Google AdWords Budget is estimated.Format: domain.tld
 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR".Format: EUR, USD etc.
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchPaidGetValuePaidKpis = function(query, callback) {
	this.request('ResearchPaidGetValuePaidKpis', query, callback);
}

/**
 * This call returns the Paid Visibility rank (PaidRank) for a domain in a given country. The rank represents the position of the domain in the top 100,000 Paid Visibility list for the country.
 * @summary Searchmetrics Paid Visibility rank of the domain (PaidRank)
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} domainFormat: domain.tld
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchPaidGetValuePaidRank = function(query, callback) {
	this.request('ResearchPaidGetValuePaidRank', query, callback);
}

/**
 * This call returns the Searchmetrics Visibility Rank in the paid Google search for a domain for a specified country, based on the latest data in our database. 
 * @summary Searchmetrics Paid Visibility for a given URL and a given country.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Domain for which the Paid Visibility is queried.Format: domain.tld, subdomain.domain.tld
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchPaidGetValuePaidVisibility = function(query, callback) {
	this.request('ResearchPaidGetValuePaidVisibility', query, callback);
}

/**
 * This call returns the number of backlinks for a given domain, subdomain or url.
 * @summary Number of backlinks for a given domain, subdomain or URL.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} Can be either a domain, a subdomain or a page. 

For a domain or a subdomain all backlinks are counted that refer to any page of the domain or subdomain. 

For any other URL only backlinks are counted that point directly to the specified page.Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchLinksGetCountBacklinks = function(query, callback) {
	this.request('ResearchLinksGetCountBacklinks', query, callback);
}

/**
 * This call returns the number of external links pointing to a the homepage and to subpages (deeplinks) of a given URL. 
 * @summary Ratio of homepage links and deeplinks for a given domain
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchLinksGetCountDeeplinkRatio = function(query, callback) {
	this.request('ResearchLinksGetCountDeeplinkRatio', query, callback);
}

/**
 * This call returns the total number of links from .edu and .gov domains pointing to the given URL. 
 * @summary Number of links from pages with an .edu or .gov top-level domain
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} Either a domain, a subdomain or an URLFormat: domain.tld, subdomain.domain.tld, domain.tld/page.html
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchLinksGetCountEduGovLinks = function(query, callback) {
	this.request('ResearchLinksGetCountEduGovLinks', query, callback);
}

/**
 * This call returns the current number of links from news sites as well as the number of referring news domains for a given URL.
 * @summary Number of links from news sites pointing to a given URL
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} Either a domain, a subdomain or an URLFormat: domain.tld, subdomain.domain.tld, domain.tld/page.html
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchLinksGetCountNewsDomains = function(query, callback) {
	this.request('ResearchLinksGetCountNewsDomains', query, callback);
}

/**
 * This call returns the number of referring domains for a given domain, subdomain or URL. 
 * @summary Number of referring domains for a given URL (domain popularity).
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} Either a domain, a subdomain or a page

For a domain or a subdomain all domains are counted that refer to any page of the domain or subdomain. 
For any other URL only domains are counted that point directly to the page with this specific URL.Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchLinksGetCountReferringDomains = function(query, callback) {
	this.request('ResearchLinksGetCountReferringDomains', query, callback);
}

/**
 * This call returns the number of different IPs with at least one link to the given URL (IP popularity).
 * @summary Number of referring IPs for a given URL (IP popularity).
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} Either a domain, a subdomain or an URL
For a domain or a subdomain all results are counted that refer to any page of the domain or subdomain.
For any other URL only results are counted that point directly to the page with this specific URL.Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchLinksGetCountReferringIps = function(query, callback) {
	this.request('ResearchLinksGetCountReferringIps', query, callback);
}

/**
 * This call returns backlinks for a given URL including a lot of additional information.
 * @summary Backlinks for a given URL
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} Either a domain, a subdomain or an URL

For a domain or a subdomain all results are counted that refer to any page of the domain or subdomain.
For any other URL only results are counted that point directly to the page with this specific URL.Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchLinksGetListBacklinks = function(query, callback) {
	this.request('ResearchLinksGetListBacklinks', query, callback);
}

/**
 * This call delivers the subpages of a given domain, subdomain or URL that are linked from external pages ordered by the number of external links.
 * @summary List of pages of a given URL with links from external pages
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} Either a domain, a subdomain or an URL

For a domain or a subdomain all results are counted that refer to any page of the domain or subdomain.
For any other URL only results are counted that point directly to the page with this specific URL.Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
 * @param query.limit {String=} Limit for the number of returned link texts
Permitted values are 10, 25, 50, 100, 250
Default is 10Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchLinksGetListLinkedPages = function(query, callback) {
	this.request('ResearchLinksGetListLinkedPages', query, callback);
}

/**
 * This call returns the anchor texts of backlinks for a given URL, ordered by frequency of occurrence.
 * @summary Most frequently used link anchor texts for a given URL.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} Either a domain, a subdomain or an URL

For a domain or a subdomain all results are counted that refer to any page of the domain or subdomain.
For any other URL only results are counted that point directly to the page with this specific URL.Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
 * @param query.limit {String=} Limit for the number of returned link texts
Permitted values are 10, 25, 50, 100, 250
Default is 10Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchLinksGetListLinktext = function(query, callback) {
	this.request('ResearchLinksGetListLinktext', query, callback);
}

/**
 * Get a list of the current SPS distribution for a domain, subdomain or a single URL.
 * @summary Distribution of incoming links according to Searchmetrics Page Strength
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} Either a domain, a subdomain or an URL

For a domain or a subdomain all results are counted that refer to any page of the domain or subdomain.
For any other URL only results are counted that point directly to the page with this specific URL.Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchLinksGetListSpsSpread = function(query, callback) {
	this.request('ResearchLinksGetListSpsSpread', query, callback);
}

/**
 * This call returns the Link Rank for a given domain in a given country, indicating the strength of the selected domain with regard to linking in comparison with all other domains of the country in question. 
The more links are pointing to the domain, the better the link rank. Also the strength of the links is taken into account in the unique algorithm used to calculate the Link Rank index.
 * @summary Link Rank for a given domain in a given country
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.competitors {String} competitors of the given domain, several domains must be separated with a comma without blank.Format: domain1.tld,domain2.tld
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchLinksGetValueLinkRank = function(query, callback) {
	this.request('ResearchLinksGetValueLinkRank', query, callback);
}

/**
 * This call returns the Searchmetrics Page Strength (SPS) an indicator for the value of a link from the respective page.
 * @summary Searchmetrics Page Strength (SPS) for a given page.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} URL of a pageFormat: domain.tld/page.html
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchLinksGetValuePageStrength = function(query, callback) {
	this.request('ResearchLinksGetValuePageStrength', query, callback);
}

/**
 * This call returns a list keywords of a domain that had rankings in the universal search results in Google in a given country, based on the latest results in our database.
 * @summary Keyword rankings for a given domain in universal search results.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Either a domain, a subdomain or a directoryFormat: domain.tld, subdomain.domain.tld, domain.tld/directory/
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchUniversalGetListRankingsDomain = function(query, callback) {
	this.request('ResearchUniversalGetListRankingsDomain', query, callback);
}

/**
 * This call returns a list keywords of a domain that had rankings in the universal search results in Google in a given country for a given date with several filter options.
 * @summary Historic keyword rankings for a given domain in universal search results with filter options.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.date {String} Date for which the universal rankings are queriedFormat: YYYYMMDD
 * @param query.type {String} Universal search type. Possible values are universal, news, maps, video, images and shopping.Format: string (e.g type4, type5 etc.)
 * @param query.url {String} Either a domain, a subdomain or a directoryFormat: domain.tld, subdomain.domain.tld, domain.tld/directory/
 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR".Format: EUR, USD etc.
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0Format: integer
 * @param query.position_from {String=} Filter: Lowest ranking of keywords that should be returned.
E.g. if you want all keywords starting from the position 4 (meaning 4,5,6 etc.) this parameter has to be set to "4".Format: integer
 * @param query.position_to {String=} Filter: Highest ranking of keywords that should be returned.
E.g. if you want all keywords up to position 3 ( resulting in all keywords with a SERP of 1, 2 or 3) this parameter has to be set to "3".Format: integer
 * @param query.search_volume_monthly_from {String=} Filter: Lowest monthly search volume in Google for returned keywords.
E.g. if you want all keywords with a minimum estimated search volume of 300 this parameter has to be set to "300".Format: integer
 * @param query.search_volume_monthly_to {String=} Filter: Highest estimated monthly search volume for returned keywords.
E.g. if you want all keywords with a maximum estimated monthly search volume of 1000 this parameter has to be set to "1000".Format: integer
 * @param query.traffic_monthly_from {String=} Filter: Lowest estimated traffic for returned keywords.
E.g. if you want all keywords with a minimum estimated traffic of 300 visitors this parameter has to be set to "300".Format: integer
 * @param query.traffic_monthly_to {String=} Filter: Highest estimated traffic for returned keywords.
E.g. if you want all keywords with a maximum estimated traffic of 1000 visitors this parameter has to be set to "1000".Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchUniversalGetListRankingsDomainFilter = function(query, callback) {
	this.request('ResearchUniversalGetListRankingsDomainFilter', query, callback);
}

/**
 * This call returns a list keywords of a domain that had rankings in the universal search results in Google in a given country for a given date.
 * @summary Historic keyword rankings for a given domain in universal search results
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: http://api.searchmetrics.com/api-calls/countries
 * @param query.date {String} Date for which the universal rankings are queriedFormat: YYYYMMDD
 * @param query.url {String} Either a domain, a subdomain or a directoryFormat: domain.tld, subdomain.domain.tld, domain.tld/directory/
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchUniversalGetListRankingsDomainHistoric = function(query, callback) {
	this.request('ResearchUniversalGetListRankingsDomainHistoric', query, callback);
}

/**
 * This call returns the Searchmetrics Visibility in the Universal Search for a domain for a specified country based on the latest data in our database.
 * @summary Searchmetrics Visibility for Universal Search for a given URL in a given country.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Either a domain, a subdomain or a directoryFormat: domain.tld, subdomain.domain.tld, domain.tld/directory/
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchUniversalGetListVisibility = function(query, callback) {
	this.request('ResearchUniversalGetListVisibility', query, callback);
}

/**
 * This call returns the Facebook Social Visibility for URLs of a given domain, split in shares, likes etc. and sorted in descending order by the number of likes.
 * @summary Facebook interaction per URL for a given domain (likes, shares etc.)
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} Either a domain, a subdomain or a directoryFormat: domain.tld, subdomain.domain.tld, domain.tld/directory/
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10.Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchSocialGetListFacebook = function(query, callback) {
	this.request('ResearchSocialGetListFacebook', query, callback);
}

/**
 * This call returns the Social Visibility for URLs of a given domain, sorted in descending order by Social Visibility.
 * @summary Social Visibility (Facebook, Twitter etc.) per URL for a given domain
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} Either a domain, a subdomain or a directoryFormat: domain.tld, subdomain.domain.tld, domain.tld/directory/
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10.Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchSocialGetListTopUrls = function(query, callback) {
	this.request('ResearchSocialGetListTopUrls', query, callback);
}

/**
 * This call returns the ranking of a domain in comparison with the Social Visibility Values of all other listed domains of a specific country, indicating the domains position in the countrys social sphere. For example, if a domain has a social rank of 2, this means that the domain has the second highest social visibility in the country in question. 
 * @summary Social Visibility Rank for a given domain in a given country
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1Format: US, GB, DE etc.
 * @param query.url {String} Either a domain or subdomainFormat: domain.tld, subdomain.domain.tld
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchSocialGetValueSocialRank = function(query, callback) {
	this.request('ResearchSocialGetValueSocialRank', query, callback);
}

/**
 * This call returns the Social Spread for a given domain or subdomain. 
 * @summary Social Spread for a given domain
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} Either a domain, a subdomain or a directoryFormat: domain.tld, subdomain.domain.tld, domain.tld/directory/
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchSocialGetValueSocialSpread = function(query, callback) {
	this.request('ResearchSocialGetValueSocialSpread', query, callback);
}

/**
 * This call returns the Social Spread for a given domain, subdomain or directory or specific URL for a given week
 * @summary Social Spread for a given domain, subdomain,directory or URL with historic data
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.date_from {String} Start UNIX timestamp. Please see www.unixtimestamp.com for details.Format: integer
 * @param query.date_to {String} End UNIX timestamp. Please see www.unixtimestamp.com for details.Format: integer
 * @param query.url {String} Either a domain, subdomain or directory. 
If this value is entered the call returns the cumulated social spread for all URLs that contain the string entered here.Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchSocialGetValueSocialSpreadFilter = function(query, callback) {
	this.request('ResearchSocialGetValueSocialSpreadFilter', query, callback);
}

/**
 * This call returns the Social Spread for a given domain or subdomain for a given week
 * @summary Social Spread for a given domain with historic data
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.date_from {String} Start UNIX timestamp. Please see www.unixtimestamp.com for details.Format: integer
 * @param query.date_to {String} End UNIX timestamp. Please see www.unixtimestamp.com for details.Format: integer
 * @param query.url {String} Either a domain, a subdomain or a directoryFormat: domain.tld, subdomain.domain.tld, domain.tld/directory/
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchSocialGetValueSocialSpreadHistoric = function(query, callback) {
	this.request('ResearchSocialGetValueSocialSpreadHistoric', query, callback);
}

/**
 * This call returns the Social Visibility for a given domain or subdomain on leading social networks (Facebook, Twitter, LinkedIn, Google+1, Pinterest). 
Social Visibility includes user actions, such as liking or sharing the domain in the social media space (e.g. via Facebook’s like button). The different user actions are weighted differently depending on the influence of the network.
 * @summary Social Visibility for a given domain
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.url {String} Either a domain, subdomain or directory.
If this value is entered the call returns the cumulated visibility for all URLs that contain the string entered here.Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchSocialGetValueVisibility = function(query, callback) {
	this.request('ResearchSocialGetValueVisibility', query, callback);
}

/**
 * This call returns the Social Visibility for a given URL on leading social networks (Facebook, Twitter, LinkedIn, Google+1, Pinterest) for a given week for a given url or directory. 
 * @summary Historic Social Visibility for a given URL or directory for a given week
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.date_from {String} Start UNIX timestamp. Please see www.unixtimestamp.com for details.Format: integer
 * @param query.date_to {String} End UNIX timestamp. Please see www.unixtimestamp.com for details.Format: integer
 * @param query.url {String} Either a domain, subdomain or directory. 
If this value is entered the call returns the cumulated visibility for all URLs that contain the string entered here.Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchSocialGetValueVisibilityFilter = function(query, callback) {
	this.request('ResearchSocialGetValueVisibilityFilter', query, callback);
}

/**
 * This call returns the Social Visibility for a given domain or subdomain on leading social networks (Facebook, Twitter, LinkedIn, Google+1, Pinterest) for a given week. 
 * @summary Historic Social Visibility for a given domain for a given week
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.date_from {String} Start UNIX timestamp. Please see www.unixtimestamp.com for details.Format: integer
 * @param query.date_to {String} End UNIX timestamp. Please see www.unixtimestamp.com for details.Format: integer
 * @param query.url {String} Either a domain, subdomain or directory.
If this value is entered the call returns the cumulated visibility for all URLs that contain the string entered here.Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.researchSocialGetValueVisibilityHistoric = function(query, callback) {
	this.request('ResearchSocialGetValueVisibilityHistoric', query, callback);
}

/**
 * Position Spread indicates the percentage ranking distribution for the selected tag, domain and search engine combination.
 * @summary Get the historic ranking distribution of the project  among the top five search results by positions
 * @param {Object} query The query parameters which will be sent to the api
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.projectOrganicGetListPositionSpreadHistoric = function(query, callback) {
	this.request('ProjectOrganicGetListPositionSpreadHistoric', query, callback);
}

/**
 * This call returns the rankings for the monitored keywords for a domain (either a project or a benchmark domain) in the organic search results in a given country, based on the latest month available in the database.
 * @summary Keyword rankings for a project or benchmark domain in organic search results
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.project_id {String} ID of the project that should be queried.
The ID can be found in the URL when viewing the project in the Searchmetrics Suite.Format: Integer
 * @param query.se_id {String} ID of the search engine that should be queried. A complete list of IDs can be found http://api.searchmetrics.com/api-calls/searchengines.
Please make sure your project includes the se_id."Format: integer
 * @param query.url {String} Domains within the project that should be queried. Several domains must be separated with a comma without blank.
Please use the exact name that is used within the project. E.g "www.searchmetrics.com" instead of "searchmetrics.com".Format: domain1.tld,domain2.tld
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"Format: integer
 * @param query.trend_interval {String=} Set the time range for the trend comparisons. To compare the actual results with the last results use "last" (default). Other possible values are "weekly" (last week) and monthly (last month).Format: string
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.projectOrganicGetListRankings = function(query, callback) {
	this.request('ProjectOrganicGetListRankings', query, callback);
}

/**
 * This call returns the rankings for the monitored keywords for a domain (either a project or a benchmark domain) in the organic search results in a given country, based on a given date.
 * @summary Keyword rankings for a project or benchmark domain in organic search results with various filter options
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.project_id {String} ID of the project that should be queried.
The ID can be found in the URL when viewing the project in the Searchmetrics SuiteFormat: integer
 * @param query.se_id {String} ID of the search engine that should be queried. A complete list of IDs can be found http://api.searchmetrics.com/api-calls/searchengines.
Please make sure your project includes the se_id.Format: integer
 * @param query.url {String} Domains within the project that should be queried. Several domains must be separated with a comma without blank.
Please use the exact name that is used within the project. E.g "www.searchmetrics.com" instead of "searchmetrics.com".Format: domain1.tld,domain2.tld
 * @param query.cpc_from {String=} Filter: Lowest estimated CPC for returned keywords.
E.g. if you want all keywords with a minimum estimated CPC of 1€ visitors this parameter has to be set to "1".Format: integer
 * @param query.cpc_to {String=} Filter: Highest estimated CPC for returned keywords.
E.g. if you want all keywords with a maximum estimated CPC of 2 this parameter has to be set to "2".Format: integer
 * @param query.date {String=} Date for which the rankings should be queriedFormat: YYYYMMDD
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250
Default is 10Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"
Default is 0Format: integer
 * @param query.position_from {String=} Filter: Lowest ranking of keywords that should be returned.
E.g. if you want all keywords starting from the position 4 (meaning 4,5,6 etc.) this parameter has to be set to "4".Format: integer
 * @param query.position_to {String=} Filter: Highest ranking of keywords that should be returned.
E.g. if you want all keywords up to position 3 ( resulting in all keywords with a SERP of 1, 2 or 3) this parameter has to be set to "3".Format: integer
 * @param query.searchvolume_from {String=} Filter: Lowest monthly search volume in Google for returned keywords.
E.g. if you want all keywords with a minimum estimated search volume of 300 this parameter has to be set to "300".Format: integer
 * @param query.searchvolume_to {String=} Filter: Highest estimated monthly search volume for returned keywords.
E.g. if you want all keywords with a maximum estimated monthly search volume of 1000 this parameter has to be set to "1000".Format: integer
 * @param query.traffic_from {String=} Filter: Lowest estimated traffic for returned keywords.
E.g. if you want all keywords with a minimum estimated traffic of 300 visitors this parameter has to be set to "300".Format: integer
 * @param query.traffic_to {String=} Filter: Highest estimated monthly search volume for returned keywords.
E.g. if you want all keywords with a maximum estimated monthly search volume of 1000 this parameter has to be set to "1000".Format: integer
 * @param query.trend_interval {String=} Set the time range for the trend comparisons. To compare the actual results with the last results use "last" (default). Other possible values are "weekly" (last week) and monthly (last month).Format: string
 * @param query.type {String=} Universal search type. Possible values are universal, news, maps, video, images and shopping.Format: string
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.projectOrganicGetListRankingsFilter = function(query, callback) {
	this.request('ProjectOrganicGetListRankingsFilter', query, callback);
}

/**
 * This call returns the rankings for the monitored keywords for a domain (either a project or a benchmark domain) in the organic search results in a given country, based on a given date.
 * @summary Historic keyword rankings for a project or benchmark domain in organic search results
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.project_id {String} ID of the project that should be queried.
The ID can be found in the URL when viewing the project in the Searchmetrics Suite.Format: integer
 * @param query.se_id {String} ID of the search engine that should be queried. A complete list of IDs can be found http://api.searchmetrics.com/api-calls/searchengines.
Please make sure your project includes the se_id.Format: integer
 * @param query.url {String} Domains within the project that should be queried. Several domains must be separated with a comma without blank.
Please use the exact name that is used within the project. E.g "www.searchmetrics.com" instead of "searchmetrics.com".Format: domain1.tld,domain2.tld
 * @param query.date {String=} Date for which the rankings should be queriedFormat: YYYYMMDD
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"Format: integer
 * @param query.trend_interval {String=} Set the time range for the trend comparisons. To compare the actual results with the last results use "last" (default). Other possible values are "weekly" (last week) and monthly (last month).Format: string
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.projectOrganicGetListRankingsHistoric = function(query, callback) {
	this.request('ProjectOrganicGetListRankingsHistoric', query, callback);
}

/**
 * Project SEO Visibility differs from general SEO Visibility in that it uses a project’s selected keywords to evaluate visibility. It is made up of ranking keywords’ search volumes and positions. Within these figures, each position is ranked individually according to factors determined by Searchmetrics. The nature of a keyword, as either a ranking or navigational keyword, equally influences SEO visibility.
 * @summary Get the historic Project SEO Visibility of a project
 * @param {Object} query The query parameters which will be sent to the api
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.projectOrganicGetListSeoVisibilityHistoric = function(query, callback) {
	this.request('ProjectOrganicGetListSeoVisibilityHistoric', query, callback);
}

/**
 * Project SEO Visibility differs from general SEO Visibility in that it uses a project’s selected keywords to evaluate visibility. It is made up of ranking keywords’ search volumes and positions. Within these figures, each position is ranked individually according to factors determined by Searchmetrics. The nature of a keyword, as either a ranking or navigational keyword, equally influences SEO visibility.
 * @summary Get the historic Project SEO Visibility of a project
 * @param {Object} query The query parameters which will be sent to the api
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.projectOrganicGetListSeoVisibilityHistoric = function(query, callback) {
	this.request('ProjectOrganicGetListSeoVisibilityHistoric', query, callback);
}

/**
 * This call returns the Searchmetrics Visibility in the organic search for a project based on the latest data in our database. 
 * @summary Get the SEO visibility for a project or for the tags of a project.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.project_id {String} ID of the project that should be queried.
The ID can be found in the URL when viewing the project in the Searchmetrics Suite.Format: integer
 * @param query.se_id {String} ID of the search engine that should be queried. A complete list of IDs can be found http://api.searchmetrics.com/api-calls/searchengines.
Please make sure your project includes the se_id.Format: integer
 * @param query.url {String} Domains within the project that should be queried. Several domains must be separated with a comma without blank.
Please use the exact name that is used within the project. E.g "www.searchmetrics.com" instead of "searchmetrics.com".Format: string
 * @param query.tags {String=} Comma separated list of tags. Please note: When using more than one tag only keywords with both tags will be includedFormat: string
 * @param query.trend_interval {String=} Set the time range for the trend comparisons. To compare the actual results with the last results use "last" (default). Other possible values are "weekly" (last week) and "monthly" (last month).Format: string
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.projectOrganicGetValueSeoVisibility = function(query, callback) {
	this.request('ProjectOrganicGetValueSeoVisibility', query, callback);
}

/**
 * This call returns a list of all identified errors, warnings and notices.
 * @summary Site optimization: errors, warnings and notices.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.project_id {String} ID of the project that should be queried.
The ID can be found in the URL when viewing the project in the Searchmetrics Suite.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.projectOptimizationGetListDomainErrors = function(query, callback) {
	this.request('ProjectOptimizationGetListDomainErrors', query, callback);
}

/**
 * The Optimization Domain Score measures a project’s optimization level. 
 * @summary Get the current Optimization Domain Score with a trend for the last crawl
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.project_id {String} ID of the project that should be queried.
The ID can be found in the URL when viewing the project in the Searchmetrics Suite.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.projectOptimizationGetValueDomainScore = function(query, callback) {
	this.request('ProjectOptimizationGetValueDomainScore', query, callback);
}

/**
 * This call returns a complete list of all projects for the sublicense of your API key.
 * @summary Get a list of projects for the current sublicense.
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.limit {String=} Limit for the number of result rows
Permitted values are 10, 25, 50, 100, 250Format: integer
 * @param query.offset {String=} Offset for result set
Must be a multiple of allowed values for the parameter "limit"Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.adminStatusGetListProjects = function(query, callback) {
	this.request('AdminStatusGetListProjects', query, callback);
}

/**
 * Get a list of all search engines used in a project. With the IDs of the search engines you can use the ranking services to get ranking data for a specific search engine within your project.
 * @summary Lists all available search engines for a given project
 * @param {Object} query The query parameters which will be sent to the api
 * @param query.project_id {String} ID of the project that should be queried.
The ID can be found in the URL when viewing the project in the Searchmetrics Suite.Format: integer
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.adminStatusGetListProjectSearchEngines = function(query, callback) {
	this.request('AdminStatusGetListProjectSearchEngines', query, callback);
}

/**
 * This call returns the amount of available credits for the current period.
 * @summary Returns the amount of available credits
 * @param {Object} query The query parameters which will be sent to the api
 * @param {searchmetrics~ApiCallback} callback
 */
searchmetrics.prototype.adminStatusGetValueAvailableCredits = function(query, callback) {
	this.request('AdminStatusGetValueAvailableCredits', query, callback);
}

});