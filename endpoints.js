module.exports = function(searchmetrics) {
	/**
	 * This call returns the number of organic keywords with a ranking in the organic search results in Google for a given domain and a given country, based on the last month available in our database. 
	 * @summary Number of organic keywords for a given domain.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc
	 * @param query.url {String} Either a domain or a subdomain Format: domain.tld, subdomain.domain.tld
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetCountDomainKeyword}
	 */
	searchmetrics.prototype.researchOrganicGetCountDomainKeyword = function(query, callback) {
		this.request('ResearchOrganicGetCountDomainKeyword', query, callback);
	}

	/**
	 * This call returns the number of organic keywords with a ranking in the organic search results in Google for a given domain and a given country and a given month. Please note that a certain subscription level may be needed to use this call. The results can be filtered by position. 
	 * @summary Number of organic keywords for a given domain with filter options.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.url {String} Either a domain or a subdomain Format: domain.tld,. subdomain.domain.tld
	 * @param query.year_month {String} Date Format: YYYYMM
	 * @param query.position_from {String=} Filter: Lowest ranking of keywords that should be considered in the count. E.g. if you want to count all keywords starting from the position 4 (meaning 4,5,6 etc.) this parameter has to be set to "4". Format: 1,2,3 etc.
	 * @param query.position_to {String=} Filter: Highest ranking of keywords that should be considered in the count. E.g. if you want to count all keywords up to position 3 ( resulting in all keywords with a SERP of 1, 2 or 3) this parameter has to be set to "3". Format: 2,3,4 etc
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetCountDomainKeywordFilter}
	 */
	searchmetrics.prototype.researchOrganicGetCountDomainKeywordFilter = function(query, callback) {
		this.request('ResearchOrganicGetCountDomainKeywordFilter', query, callback);
	}

	/**
	 * This call returns the number of organic keywords with a ranking in the organic search results in Google for a given domain and a given country and a given month. Please note that a certain subscription level may be needed to use this call. 
	 * @summary Number of organic keywords for a given domain with access to historic data.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.url {String} Either a domain or a subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.year_month {String} Date Format: YYYYMM
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetCountDomainKeywordHistoric}
	 */
	searchmetrics.prototype.researchOrganicGetCountDomainKeywordHistoric = function(query, callback) {
		this.request('ResearchOrganicGetCountDomainKeywordHistoric', query, callback);
	}

	/**
	 * Get a list of the most relevant shared keywords in the organic search results for two URLs. 
	 * @summary Overview comparison of the most relevant shared keywords (comeptititve keywords) for two URLs in organic search results.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url_1 {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.url_2 {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10. Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetListCommonKeywords}
	 */
	searchmetrics.prototype.researchOrganicGetListCommonKeywords = function(query, callback) {
		this.request('ResearchOrganicGetListCommonKeywords', query, callback);
	}

	/**
	 * This call returns the competitors in the organic search. A competitor is defined as a domain that shows up in the organic search results for a keyword for which the original domain has a ranking as well. 
	 * @summary Competitor domains in the organic search
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Either a domain or subdomain Format: domain.ltd, subdomain.domain.ltd
	 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR". Format: EUR, USD etc.
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10. Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetListCompetitors}
	 */
	searchmetrics.prototype.researchOrganicGetListCompetitors = function(query, callback) {
		this.request('ResearchOrganicGetListCompetitors', query, callback);
	}

	/**
	 * Searchmetrics organizes all analyzed keywords into standard industry sectors. The Industry Spread shows the distribution of all keywords of a domain on the different industry sectors. 
	 * @summary Industry sector classification of a domain
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetListIndustrySpread}
	 */
	searchmetrics.prototype.researchOrganicGetListIndustrySpread = function(query, callback) {
		this.request('ResearchOrganicGetListIndustrySpread', query, callback);
	}

	/**
	 * This call returns a list keywords of a domain that had rankings in the organic search results in Google in a given country, based on the latest month available in our database. The results include a lot of additional information (please check result description) and are orderd by estimated traffic in descending order. 
	 * @summary Keyword rankings for a given domain in organic search results.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0 Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetListRankingsDomain}
	 */
	searchmetrics.prototype.researchOrganicGetListRankingsDomain = function(query, callback) {
		this.request('ResearchOrganicGetListRankingsDomain', query, callback);
	}

	/**
	 * This call returns a list keywords of a domain that had rankings in the organic search results in Google in a given country, based on the latest data in our database. Please note that a certain subscription level may be needed to use this call. Additionally the results can be filtered by position, search volume and/or monthly traffic volume. The results include a lot of additional information (please check result description) and are orderd by estimated traffic in descending order. 
	 * @summary Keyword rankings for a given domain in organic search results with filter options.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.url {String} Either a domain or a subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR". Format: EUR, USD etc.
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Format: integer
	 * @param query.position_from {String=} Filter: Lowest ranking of keywords that should be returned. E.g. if you want all keywords starting from the position 4 (meaning 4,5,6 etc.) this parameter has to be set to "4". Format: string
	 * @param query.position_to {String=} Filter: Highest ranking of keywords that should be returned. E.g. if you want all keywords up to position 3 ( resulting in all keywords with a SERP of 1, 2 or 3) this parameter has to be set to "3". Format: string
	 * @param query.search_volume_monthly_from {String=} Filter: Lowest monthly search volume in Google for returned keywords. E.g. if you want all keywords with a minimum estimated search volume of 300 this parameter has to be set to "300". Format: integer
	 * @param query.search_volume_monthly_to {String=} Filter: Highest estimated monthly search volume for returned keywords. E.g. if you want all keywords with a maximum estimated monthly search volume of 1000 this parameter has to be set to "1000". Format: integer
	 * @param query.traffic_monthly_from {String=} Filter: Lowest estimated traffic for returned keywords. E.g. if you want all keywords with a minimum estimated traffic of 300 visitors this parameter has to be set to "300". Format: integer
	 * @param query.traffic_monthly_to {String=} Filter: Highest estimated traffic for returned keywords. E.g. if you want all keywords with a maximum estimated traffic of 1000 visitors this parameter has to be set to "1000". Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetListRankingsDomainFilter}
	 */
	searchmetrics.prototype.researchOrganicGetListRankingsDomainFilter = function(query, callback) {
		this.request('ResearchOrganicGetListRankingsDomainFilter', query, callback);
	}

	/**
	 * This call returns a list keywords of a domain that had rankings in the organic search results in Google in a given country in a given week. Please note that a certain subscription level may be needed to use this call. The result includes a lot of additional information (please check result description) and are orderd by estimated traffic in descending order. 
	 * @summary Historic keyword rankings for a given domain in organic search results.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.date {String} Date Format: YYYYMMDD
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR". Format: EUR, USD etc.
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0 Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetListRankingsDomainHistoric}
	 */
	searchmetrics.prototype.researchOrganicGetListRankingsDomainHistoric = function(query, callback) {
		this.request('ResearchOrganicGetListRankingsDomainHistoric', query, callback);
	}

	/**
	 * This call returns a list of Google's organic rankings for a given keyword, based on the latest month available in our database and ordered by position in ascending order. As well a trend in comparison to the previous month is returned. 
	 * @summary Rankings for a given keyword in organic search results.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.keyword {String} Keyword for which the rankings are determined Format: string
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0 Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetListRankingsKeyword}
	 */
	searchmetrics.prototype.researchOrganicGetListRankingsKeyword = function(query, callback) {
		this.request('ResearchOrganicGetListRankingsKeyword', query, callback);
	}

	/**
	 * This call returns a list of Google's organic rankings for a given keyword, based on the latest month available in our database and ordered by position in ascending order. As well a trend in comparison to the previous month is returned. Please note that a certain subscription level may be needed to use this call. 
	 * @summary Historic rankings for a given keyword in organic search results.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.date {String} Date Format: YYYYMMDD
	 * @param query.keyword {String} Keyword for which the rankings are determined Format: string
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0 Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetListRankingsKeywordHistoric}
	 */
	searchmetrics.prototype.researchOrganicGetListRankingsKeywordHistoric = function(query, callback) {
		this.request('ResearchOrganicGetListRankingsKeywordHistoric', query, callback);
	}

	/**
	 * This call returns the Searchmetrics Visibility in the organic search for a domain for a specified country based for a given timeframe. The SEO Visibility is composed of search volume and the position of ranking keywords. Each position is individually measured by a calculated factor by Searchmetrics. Also, the SEO Visibility factors in whether the ranking keywords are navigational or informational. What does the SEO Visibility show us? The SEO Visibility presents the current trend and historical development of a domain's visibility in search engines. The index reflects how often a website shows up in the search results. While the SEO Visibility can relate to a website's real traffic, it is important to remember that traffic can come from many different places online. Therefore the SEO Visibility is only an indicator of visibility that comes from a website's organic search channel. SEO Visibility makes it possible to compare the performance of different domains in search engines. With the historical data, problems as well as positive changes can be identified. Comparing the SEO Visibility of thematically similar websites or competitors will provide the most value as developments of the market environment will be factored in and market trends easily identified. Please note that a certain subscription level may be needed to use this call. 
	 * @summary Searchmetrics SEO Visibility for a given URL in a given country in a given timeframe.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc
	 * @param query.date_from {String} Start date from which the SEO Visibility should be queried Format: YYYYMMDD
	 * @param query.date_to {String} End date to which the SEO Visibility should be queried Format: YYYYMMDD
	 * @param query.url {String} Domain for which the SEO Visibility is queried Format: domain.tld, subdomain.domain.tld
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetListSeoVisibilityHistoric}
	 */
	searchmetrics.prototype.researchOrganicGetListSeoVisibilityHistoric = function(query, callback) {
		this.request('ResearchOrganicGetListSeoVisibilityHistoric', query, callback);
	}

	/**
	 * This call returns the domains with the largest absolute visibility losses for organic search results in the previous week in a given country. 
	 * @summary Top100 Searchmetrics Organic Visibility losers in a given country
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetListSeoVisibilityTop100Losers}
	 */
	searchmetrics.prototype.researchOrganicGetListSeoVisibilityTop100Losers = function(query, callback) {
		this.request('ResearchOrganicGetListSeoVisibilityTop100Losers', query, callback);
	}

	/**
	 * This call returns the domains with the largest absolute visibility gains for organic search results in the previous week in a given country. 
	 * @summary Top100 Organic Visibility winners in a given country
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetListSeoVisibilityTop100Winners}
	 */
	searchmetrics.prototype.researchOrganicGetListSeoVisibilityTop100Winners = function(query, callback) {
		this.request('ResearchOrganicGetListSeoVisibilityTop100Winners', query, callback);
	}

	/**
	 * This data represents the relative distribution of a site's search results (SERPs) in Google in a given country based on the latest data in our database. The rankings are split into 7 clusters: Position 1-3 Position 4-6 Position 7-10 Position 11-21 Position 21-30 Position 31-40 Position 41+ For each group, the absolute number of keywords as well as the distribution in percent is returned. 
	 * @summary Ranking distribution of identified keywords in a given country.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} URL for which the SEO Visibility is determined. The Visibility can be queried for a domain, a subdomain or a directory. For a domain, subdomain or directory all belonging sub-pages are included in the calculation. Format: domain.tld, subdomain.domain.tld, domain.tld/directory
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetListSerpSpread}
	 */
	searchmetrics.prototype.researchOrganicGetListSerpSpread = function(query, callback) {
		this.request('ResearchOrganicGetListSerpSpread', query, callback);
	}

	/**
	 * This call returns the Subdomains in the organic search. A subdomain is defined with the domain in the organic search results. 
	 * @summary Subdomains for one given domain
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Get a domain Format: domain.tld
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10. Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetListSubdomains}
	 */
	searchmetrics.prototype.researchOrganicGetListSubdomains = function(query, callback) {
		this.request('ResearchOrganicGetListSubdomains', query, callback);
	}

	/**
	 * This call returns the SEO Visibility rank (SEORank) for a domain in a given country. The rank represents the position of the domain in the top 100,000 SEO Visibility list for the country. The SEO Visibility is composed of search volume and the position of ranking keywords. Each position is individually measured by a calculated factor by Searchmetrics. Also, the SEO Visibility factors in whether the ranking keywords are navigational or informational. What does the SEO Visibility show us? The SEO Visibility presents the current trend and historical development of a domain's visibility in search engines. The index reflects how often a website shows up in the search results. While the SEO Visibility can relate to a website's real traffic, it is important to remember that traffic can come from many different places online. Therefore the SEO Visibility is only an indicator of visibility that comes from a website's organic search channel. SEO Visibility makes it possible to compare the performance of different domains in search engines. With the historical data, problems as well as positive changes can be identified. Comparing the SEO Visibility of thematically similar websites or competitors will provide the most value as developments of the market environment will be factored in and market trends easily identified. 
	 * @summary SEO Visibility rank of the domain (SEORank)
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc
	 * @param query.url {String} Domain Format: domain.tld
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetValueSeoRank}
	 */
	searchmetrics.prototype.researchOrganicGetValueSeoRank = function(query, callback) {
		this.request('ResearchOrganicGetValueSeoRank', query, callback);
	}

	/**
	 * This call returns the Searchmetrics Visibility in the organic search for a domain for a specified country based on the latest data in our database. In addition, a trend in comparision to the previous week is delivered. The SEO Visibility is composed of search volume and the position of ranking keywords. Each position is individually measured by a calculated factor by Searchmetrics. Also, the SEO Visibility factors in whether the ranking keywords are navigational or informational. What does the SEO Visibility show us? The SEO Visibility presents the current trend and historical development of a domain's visibility in search engines. The index reflects how often a website shows up in the search results. While the SEO Visibility can relate to a website's real traffic, it is important to remember that traffic can come from many different places online. Therefore the SEO Visibility is only an indicator of visibility that comes from a website's organic search channel. SEO Visibility makes it possible to compare the performance of different domains in search engines. With the historical data, problems as well as positive changes can be identified. Comparing the SEO Visibility of thematically similar websites or competitors will provide the most value as developments of the market environment will be factored in and market trends easily identified. 
	 * @summary Searchmetrics SEO Visibility for a given URL in a given country.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} URL for which the SEO Visibility is determined. The Visibility can be queried for a domain, a subdomain or a directory. For a domain, subdomain or directory all belonging sub-pages are included in the calculation. Format: domain.tld, subdomain.domain.tld or domain.tld/directory/
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetValueSeoVisibility}
	 */
	searchmetrics.prototype.researchOrganicGetValueSeoVisibility = function(query, callback) {
		this.request('ResearchOrganicGetValueSeoVisibility', query, callback);
	}

	/**
	 * This call returns the Searchmetrics Visibility across all countries for a domain in the organic search, based on the latest data in our database. The SEO Visibility is composed of search volume and the position of ranking keywords. Each position is individually measured by a calculated factor by Searchmetrics. Also, the SEO Visibility factors in whether the ranking keywords are navigational or informational. What does the SEO Visibility show us? The SEO Visibility presents the current trend and historical development of a domain's visibility in search engines. The index reflects how often a website shows up in the search results. While the SEO Visibility can relate to a website's real traffic, it is important to remember that traffic can come from many different places online. Therefore the SEO Visibility is only an indicator of visibility that comes from a website's organic search channel. SEO Visibility makes it possible to compare the performance of different domains in search engines. With the historical data, problems as well as positive changes can be identified. Comparing the SEO Visibility of thematically similar websites or competitors will provide the most value as developments of the market environment will be factored in and market trends easily identified. 
	 * @summary Searchmetrics SEO Worldwide Visibility for a given URL.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} URL for which the SEO Visibility is determined. The URL can be either an domain, a subdomain or a directory. For a domain, subdomain or directory all belonging sub-pages are included in the calculation. Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetValueSeoVisibilityWorld}
	 */
	searchmetrics.prototype.researchOrganicGetValueSeoVisibilityWorld = function(query, callback) {
		this.request('ResearchOrganicGetValueSeoVisibilityWorld', query, callback);
	}

	/**
	 * Returns the estimated cost of organic traffic if it was gained through Google AdWords advertising (for the last 2 complete months available in our database). The value is calculated from the number of visitors earned through organic search results and the CPC amount that would have been needed to attract them through paid search results. It thus provides a measure for the value of previous SEO efforts. The currency can be specified, default is EUR. 
	 * @summary Estimated paid value of organic search traffic.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} Country code as specified in ISO 3166-1 Format: US, GB, DE etc
	 * @param query.url {String} The domain or subdomain for which the traffic value is estimated. Format: domain.tld, subdomain.domain.tld
	 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR". Format: USD, EUR etc.
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchOrganicGetValueTrafficValue}
	 */
	searchmetrics.prototype.researchOrganicGetValueTrafficValue = function(query, callback) {
		this.request('ResearchOrganicGetValueTrafficValue', query, callback);
	}

	/**
	 * This call returns search-related information for a given keyword for a given country for the current month. 
	 * @summary Search volume, CPC etc. for a given keyword
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.keyword {String} Keyword for which info should be queried. Format: string
	 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR". Format: EUR, USD etc.
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchKeywordsGetListKeywordinfo}
	 */
	searchmetrics.prototype.researchKeywordsGetListKeywordinfo = function(query, callback) {
		this.request('ResearchKeywordsGetListKeywordinfo', query, callback);
	}

	/**
	 * This call returns search-related information for a given keyword for a given country for the specified month. Please note that a certain subscription level may be needed to use this call. 
	 * @summary Historic search volume, CPC etc. for a given keyword
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.keyword {String} Keyword for which info should be queried. Format: string
	 * @param query.year_month {String} Date Format: YYYYMM
	 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR". Format: EUR, USD etc.
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchKeywordsGetListKeywordinfoHistoric}
	 */
	searchmetrics.prototype.researchKeywordsGetListKeywordinfoHistoric = function(query, callback) {
		this.request('ResearchKeywordsGetListKeywordinfoHistoric', query, callback);
	}

	/**
	 * This call returns the keywords with the biggest losses in absolute search volumes in comparison to the previous week for a given domain. 
	 * @summary Keywords with the highest absolute losses in organic search traffic for a given domain
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10. Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchKeywordsGetListLosers}
	 */
	searchmetrics.prototype.researchKeywordsGetListLosers = function(query, callback) {
		this.request('ResearchKeywordsGetListLosers', query, callback);
	}

	/**
	 * This call returns the keywords with the biggest losses in absolute search volumes in comparison to the previous week for a given domain for a given point in time. Please note that a certain subscription level may be needed to use this call. Several filter options are available. 
	 * @summary Keywords with the highest absolute losses in organic search traffic for a given domain with filter options
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.date {String} Date for which the winners are queried Format: YYYYMMDD
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.cpc_from {String=} Filter: Lowest estimated CPC for returned keywords. E.g. if you want all keywords with a minimum estimated CPC of 1€ visitors this parameter has to be set to "1". Format: integer
	 * @param query.cpc_to {String=} Filter: Highest estimated CPC for returned keywords. E.g. if you want all keywords with a maximum estimated CPC of 2 this parameter has to be set to "2". Format: integer
	 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR". Format: EUR, USD etc.
	 * @param query.delta_position_from {String=} Filter: Lowest change in position of a keyword that should be returned. E.g. if you want all keywords with a change of 4 or less positions this parameter has to be set to "-4". Format: integer
	 * @param query.delta_position_to {String=} Filter: Highest change in position of a keyword that should be returned. E.g. if you want all keywords with a change of 10 or more positions this parameter has to be set to "-10". Format: integer
	 * @param query.delta_traffic_from {String=} Filter: Lowest change in traffic of a keyword that should be returned. E.g. if you want all keywords with a change of 50 or less visitors this parameter has to be set to "-50". Format: integer
	 * @param query.delta_traffic_to {String=} Filter: Highest change in traffic of a keyword that should be returned. E.g. if you want all keywords with a change of 1000 or more visitors this parameter has to be set to "-1000". Format: integer
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10. Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0. Format: integer
	 * @param query.position_from {String=} Filter: Lowest ranking of keywords that should be returned. E.g. if you want all keywords starting from the position 4 (meaning 4,5,6 etc.) this parameter has to be set to "4". Format: integer
	 * @param query.position_to {String=} Filter: Highest ranking of keywords that should be returned. E.g. if you want all keywords up to position 3 ( resulting in all keywords with a SERP of 1, 2 or 3) this parameter has to be set to "3". Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchKeywordsGetListLosersFilter}
	 */
	searchmetrics.prototype.researchKeywordsGetListLosersFilter = function(query, callback) {
		this.request('ResearchKeywordsGetListLosersFilter', query, callback);
	}

	/**
	 * This call returns the keywords with the biggest losses in absolute search volumes in comparison to the previous week for a given domain for a given date Please note that a certain subscription level may be needed to use this call. 
	 * @summary Keywords with the highest absolute losses in organic search traffic for a given domain for a given date
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.date {String} Date from which the SEO Visibility losers should be queried Format: YYYYMMDD
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10. Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchKeywordsGetListLosersHistoric}
	 */
	searchmetrics.prototype.researchKeywordsGetListLosersHistoric = function(query, callback) {
		this.request('ResearchKeywordsGetListLosersHistoric', query, callback);
	}

	/**
	 * This call returns related keywords to a given term, meaning words that have a semantic similarity to the given term. For the given term "car" e.g. "auto" could be returned. Other additional information such as search volume and estimated CPC is returned based on the last month in our database and the given country. All listed keywords are ordered by search volume. 
	 * @summary List of keywords related to a given keyword.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.keyword {String} Keyword that is used as a basis to deliver related keywords Format: string
	 * @param query.limit {String=} Determines the number of result rows. Allowed values result are 10/25/50/100/250. Default value is 10. Format: integer
	 * @param query.offset {String=} Offset for result set, default is 0. Has to be a multiple of allowed values for the parameter "limit". Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchKeywordsGetListRelatedKeywords}
	 */
	searchmetrics.prototype.researchKeywordsGetListRelatedKeywords = function(query, callback) {
		this.request('ResearchKeywordsGetListRelatedKeywords', query, callback);
	}

	/**
	 * This service returns keywords that contain a given term within a word or phrase. A result example for the given term "auto" would be "automobile" and "auto insurance" . Other additional information such as search volume and estimated CPC is returned based on the last month in our database and the given country. All listed keywords are ordered by search volume. 
	 * @summary List of keywords that contain a selected keyword.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.keyword {String} keyword that is used to find similar keywords Format: string
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 25 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0 Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchKeywordsGetListSimilarKeywords}
	 */
	searchmetrics.prototype.researchKeywordsGetListSimilarKeywords = function(query, callback) {
		this.request('ResearchKeywordsGetListSimilarKeywords', query, callback);
	}

	/**
	 * This call returns the keywords with the biggest gains in absolute search volumes in comparison to the previous week for a given domain. 
	 * @summary Keywords with the highest absolute gains in organic search traffic for a given domain
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10. Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchKeywordsGetListWinners}
	 */
	searchmetrics.prototype.researchKeywordsGetListWinners = function(query, callback) {
		this.request('ResearchKeywordsGetListWinners', query, callback);
	}

	/**
	 * This call returns the keywords with the biggest gains in absolute search volumes in comparison to the previous week for a given domain for a given point in time. Please note that a certain subscription level may be needed to use this call. Several filter options are available. 
	 * @summary Keywords with the highest absolute gains in organic search traffic for a given domain with filter options
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.date {String} Date for which the winners are queried Format: YYYYMMDD
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.cpc_from {String=} Filter: Lowest estimated CPC for returned keywords. E.g. if you want all keywords with a minimum estimated CPC of 1€ visitors this parameter has to be set to "1". Format: integer
	 * @param query.cpc_to {String=} Filter: Highest estimated CPC for returned keywords. E.g. if you want all keywords with a maximum estimated CPC of 2 this parameter has to be set to "2". Format: integer
	 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR". Format: EUR, USD etc.
	 * @param query.delta_position_from {String=} Filter: Lowest change in position of a keyword that should be returned. E.g. if you want all keywords with a change of 4 or more positions this parameter has to be set to "4". Format: integer
	 * @param query.delta_position_to {String=} Filter: Highest change in position of a keyword that should be returned. E.g. if you want all keywords with a change of 10 or less positions this parameter has to be set to "10". Format: integer
	 * @param query.delta_traffic_from {String=} Filter: Lowest change in traffic of a keyword that should be returned. E.g. if you want all keywords with a change of 50 or more visitors this parameter has to be set to "50". Format: integer
	 * @param query.delta_traffic_to {String=} Filter: Highest change in traffic of a keyword that should be returned. E.g. if you want all keywords with a change of 1000 or less visitors this parameter has to be set to "1000". Format: integer
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10. Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0. Format: integer
	 * @param query.position_from {String=} Filter: Lowest ranking of keywords that should be returned. E.g. if you want all keywords starting from the position 4 (meaning 4,5,6 etc.) this parameter has to be set to "4". Format: integer
	 * @param query.position_to {String=} Filter: Highest ranking of keywords that should be returned. E.g. if you want all keywords up to position 3 ( resulting in all keywords with a SERP of 1, 2 or 3) this parameter has to be set to "3". Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchKeywordsGetListWinnersFilter}
	 */
	searchmetrics.prototype.researchKeywordsGetListWinnersFilter = function(query, callback) {
		this.request('ResearchKeywordsGetListWinnersFilter', query, callback);
	}

	/**
	 * This call returns the keywords with the biggest gains in absolute search volumes in comparison to the previous week for a given domain for a given point in time. Please note that a certain subscription level may be needed to use this call. 
	 * @summary Keywords with the highest absolute gains in organic search traffic for a given domain with access to historic data
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.date {String} Date Format: YYYYMMDD
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10. Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchKeywordsGetListWinnersHistoric}
	 */
	searchmetrics.prototype.researchKeywordsGetListWinnersHistoric = function(query, callback) {
		this.request('ResearchKeywordsGetListWinnersHistoric', query, callback);
	}

	/**
	 * Returns the number of keywords in Google's paid search for a given domain in a given country for the last month available in our database. 
	 * @summary Number of paid keywords for a domain in a given country.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Domain for which the number of paid keywords is determined. Format: domain.tld, subdomain.domain.tld
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchPaidGetCountDomainKeyword}
	 */
	searchmetrics.prototype.researchPaidGetCountDomainKeyword = function(query, callback) {
		this.request('ResearchPaidGetCountDomainKeyword', query, callback);
	}

	/**
	 * Returns the number of keywords in Google's paid search for a given domain in a given country in a given month. The result can be filtered with a minimum and maximum ranking position e.g. if you want to count only keywords with a ranking position between 1 and 3. Please note that a certain subscription level may be needed to use this call. 
	 * @summary Number of paid keywords for a domain in a given country with filter options.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.url {String} Domain for which the number of paid keywords is determined. Format: domain.tld, subdomain.domain.tld
	 * @param query.year_month {String} month for which the number of paid keywords should be queried Format: YYYYMM
	 * @param query.position_from {String=} Filter: Lowest ranking of keywords that should be considered in the counting. E.g. if you want to count all keywords starting from the position 4 (meaning 4,5,6 etc.) this parameter has to be set to "4". Format: 1,2,3 etc.
	 * @param query.position_to {String=} Filter: Highest ranking of keywords that should be considered in the counting. E.g. if you want to count all keywords up to position 3 ( resulting in all keywords with a SERP of 1, 2 or 3) this parameter has to be set to "3". Format: 2,3,4 etc
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchPaidGetCountDomainKeywordFilter}
	 */
	searchmetrics.prototype.researchPaidGetCountDomainKeywordFilter = function(query, callback) {
		this.request('ResearchPaidGetCountDomainKeywordFilter', query, callback);
	}

	/**
	 * Returns the number of keywords in Google's paid search for a given domain in a given country in a given month. Please note that a certain subscription level may be needed to use this call. 
	 * @summary Number of paid keywords for a domain in a given country also for previous months,
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.url {String} Domain for which the number of paid keywords is determined. Format: domain.tld, subdomain.domain.tld
	 * @param query.year_month {String} Date Format: YYYYMM
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchPaidGetCountDomainKeywordHistoric}
	 */
	searchmetrics.prototype.researchPaidGetCountDomainKeywordHistoric = function(query, callback) {
		this.request('ResearchPaidGetCountDomainKeywordHistoric', query, callback);
	}

	/**
	 * This call returns a list of different ad variantions for the queried domain. 
	 * @summary Get a list of different ad variations
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchPaidGetListAdVariations}
	 */
	searchmetrics.prototype.researchPaidGetListAdVariations = function(query, callback) {
		this.request('ResearchPaidGetListAdVariations', query, callback);
	}

	/**
	 * Get a list of the most relevant shared keywords in the paid search results for two URLs. 
	 * @summary Overview comparison of the most relevant shared keywords (comeptititve keywords) for two URLs in paid search results.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url_1 {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.url_2 {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR". Format: EUR, USD etc.
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10. Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchPaidGetListCommonKeywords}
	 */
	searchmetrics.prototype.researchPaidGetListCommonKeywords = function(query, callback) {
		this.request('ResearchPaidGetListCommonKeywords', query, callback);
	}

	/**
	 * This call returns the competitors in the paid search. A competitor is defined as a domain that shows up in the paid search results for a keyword for which the original domain has a ranking as well. 
	 * @summary Competitor domains in the paid search
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR". Format: EUR, USD etc.
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10. Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchPaidGetListCompetitors}
	 */
	searchmetrics.prototype.researchPaidGetListCompetitors = function(query, callback) {
		this.request('ResearchPaidGetListCompetitors', query, callback);
	}

	/**
	 * This call returns paid keywords associated with advertisements placed for the selected domain. Paid keyword results are pulled from the first 5 pages of the search engine over the last week. What do the Paid Keywords show us? The total amount of paid keywords ranking for a domain in the Searchmetrics database provides us an overview of the domain's advertising coverage. Comparing thematically similar websites or competitors allows users to assess the penetration of the potential in the market. When analyzed in combination with with organic results, the number of paid keywords provides an interesting insight in to the competitor's SEO strategy and the keywords that the competitor chooses to optimize vs. advertise. 
	 * @summary Paid keywords with advertisements for a given domain
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10 Format: Integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0 Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchPaidGetListKeywords}
	 */
	searchmetrics.prototype.researchPaidGetListKeywords = function(query, callback) {
		this.request('ResearchPaidGetListKeywords', query, callback);
	}

	/**
	 * This call returns paid keywords associated with advertisements placed for the selected domain. Paid keyword results are pulled from the first 5 pages of the search engine over the last month. What do the Paid Keywords show us? The total amount of paid keywords ranking for a domain in the Searchmetrics database provides us an overview of the domain's advertising coverage. Comparing thematically similar websites or competitors allows users to assess the penetration of the potential in the market. When analyzed in combination with with organic results, the number of paid keywords provides an interesting insight in to the competitor's SEO strategy and the keywords that the competitor chooses to optimize vs. advertise. 
	 * @summary Paid keywords with advertisements for a given domain
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10. Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter ""limit"" Default is 0. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchPaidGetListKeywordsLongtail}
	 */
	searchmetrics.prototype.researchPaidGetListKeywordsLongtail = function(query, callback) {
		this.request('ResearchPaidGetListKeywordsLongtail', query, callback);
	}

	/**
	 * This call returns the Searchmetrics Visibility Rank in the paid Google search for a domain for a specified country in a given timeframe- The Paid Visibility displays the visibility of the selected domain in paid search. It is based on the search volume and ad position of the ranked keywords. Each position is weighted individually according to a factor calculated by Searchmetrics. The Paid Visibility factors in the positioning of an ad whether it is a HPA (High Performance Ad= Ad above the organic results) or a PA (Perfomance Ad= Ad next to the organic results). What does the Paid Visibility show us? Similar to SEO Visibility, Paid Visibility shows the advertising activity of a domain on Google. Changes in the Paid Visibility could result from budget increases or decreases as well as market changes. Users can also compare the Paid Visibility of competitive domains to assess how much of the potential market a domain is capitalizing on with their pay-per-click campaigns. Please note that a certain subscription level may be needed to use this call. 
	 * @summary Searchmetrics Paid Visibility for a given URL and a given country in a given timeframe.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.date_from {String} Start date from which the Paid Visibility should be queried Format: YYYYMMDD
	 * @param query.date_to {String} End date up to which the Paid Visibility should be queried Format: YYYYMMDD
	 * @param query.url {String} Domain for which the Paid Visibility is queried. Format: domain.tld, subdomain.domain.tld
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchPaidGetListPaidVisibilityHistoric}
	 */
	searchmetrics.prototype.researchPaidGetListPaidVisibilityHistoric = function(query, callback) {
		this.request('ResearchPaidGetListPaidVisibilityHistoric', query, callback);
	}

	/**
	 * This call returns a collection of Paid Search key performance indicators (KPIs) for a given country for the last complete month available in our database. In detail these are: paid traffic, ad budget, clicks per day, average CPC, Paid Rank The currency can be specified, default is EUR. 
	 * @summary Collection of Paid Search KPIs: paid traffic, ad budget, clicks per day, average CPC, Paid Rank
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Domain for which the Google AdWords Budget is estimated. Format: domain.tld
	 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR". Format: EUR, USD etc.
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchPaidGetValuePaidKpis}
	 */
	searchmetrics.prototype.researchPaidGetValuePaidKpis = function(query, callback) {
		this.request('ResearchPaidGetValuePaidKpis', query, callback);
	}

	/**
	 * This call returns the Paid Visibility rank (PaidRank) for a domain in a given country. The rank represents the position of the domain in the top 100,000 Paid Visibility list for the country. The paid visibility aggregates the collected results of the analyzed site in AdWords advertisements. 
	 * @summary Searchmetrics Paid Visibility rank of the domain (PaidRank)
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} domain Format: domain.tld
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchPaidGetValuePaidRank}
	 */
	searchmetrics.prototype.researchPaidGetValuePaidRank = function(query, callback) {
		this.request('ResearchPaidGetValuePaidRank', query, callback);
	}

	/**
	 * This call returns the Searchmetrics Visibility Rank in the paid Google search for a domain for a specified country, based on the latest data in our database. As well a trend in comparision to the previous week is delivered. The Paid Visibility displays the visibility of the selected domain in paid search. It is based on the search volume and ad position of the ranked keywords. Each position is weighted individually according to a factor calculated by Searchmetrics. The Paid Visibility factors in the positioning of an ad whether it is a HPA (High Performance Ad= Ad above the organic results) or a PA (Perfomance Ad= Ad next to the organic results). What does the Paid Visibility show us? Similar to SEO Visibility, Paid Visibility shows the advertising activity of a domain on Google. Changes in the Paid Visibility could result from budget increases or decreases as well as market changes. Users can also compare the Paid Visibility of competitive domains to assess how much of the potential market a domain is capitalizing on with their pay-per-click campaigns. 
	 * @summary Searchmetrics Paid Visibility for a given URL and a given country.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Domain for which the Paid Visibility is queried. Format: domain.tld, subdomain.domain.tld
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchPaidGetValuePaidVisibility}
	 */
	searchmetrics.prototype.researchPaidGetValuePaidVisibility = function(query, callback) {
		this.request('ResearchPaidGetValuePaidVisibility', query, callback);
	}

	/**
	 * This call returns the number of backlinks for a given domain, subdomain or url. 
	 * @summary Number of backlinks for a given domain, subdomain or URL.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} Can be either a domain, a subdomain or a page. For a domain or a subdomain all backlinks are counted that refer to any page of the domain or subdomain. For any other URL only backlinks are counted that point directly to the specified page. Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchLinksGetCountBacklinks}
	 */
	searchmetrics.prototype.researchLinksGetCountBacklinks = function(query, callback) {
		this.request('ResearchLinksGetCountBacklinks', query, callback);
	}

	/**
	 * This call returns the number of external links pointing to a the homepage and to subpages (deeplinks) of a given URL. You should keep this ratio in mind for link-building projects. It should be as ‘natural’ as possible and judged according to the ratio of your strongest competitors. 
	 * @summary Ratio of homepage links and deeplinks for a given domain
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchLinksGetCountDeeplinkRatio}
	 */
	searchmetrics.prototype.researchLinksGetCountDeeplinkRatio = function(query, callback) {
		this.request('ResearchLinksGetCountDeeplinkRatio', query, callback);
	}

	/**
	 * This call returns the total number of links from .edu and .gov domains pointing to the given URL. These links are often seen as especially strong because they come from universities and American governmental agencies. 
	 * @summary Number of links from pages with an .edu or .gov top-level domain
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} Either a domain, a subdomain or an URL Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchLinksGetCountEduGovLinks}
	 */
	searchmetrics.prototype.researchLinksGetCountEduGovLinks = function(query, callback) {
		this.request('ResearchLinksGetCountEduGovLinks', query, callback);
	}

	/**
	 * This call returns the current number of links from news sites as well as the number of referring news domains for a given URL. Google has high trust in news pages because editors are responsible for the setting of links. A link from a news page is therefore more valuable than a link from a web catalogue or a blog. However, all types of links are necessary for a natural link profile. 
	 * @summary Number of links from news sites pointing to a given URL
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} Either a domain, a subdomain or an URL Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchLinksGetCountNewsDomains}
	 */
	searchmetrics.prototype.researchLinksGetCountNewsDomains = function(query, callback) {
		this.request('ResearchLinksGetCountNewsDomains', query, callback);
	}

	/**
	 * This call returns the number of referring domains for a given domain, subdomain or URL. Referring domains are important to analyze to understand the strength, relevancy and diversity of a domain's backlinks. The total number of backlinks can often include many links from the same referring domain, so rather than sifting through multiple links from the same domain, an analysis of referring domains can save time and reveal issues. What do the Referring Domains show us? Referring Domains reveal backlink sources and can be compared to competitors to establish strength in the market place. Referring domains can also help webmasters ensure that backlinks are relevant to the content of the site and coming from a diversity of quality sources. This is becoming more important to the search engines as an imbalanced link profile can be a sign of spam or link sculpting, both of which will negatively impact the ranks. 
	 * @summary Number of referring domains for a given URL (domain popularity).
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} Either a domain, a subdomain or a page For a domain or a subdomain all domains are counted that refer to any page of the domain or subdomain. For any other URL only domains are counted that point directly to the page with this specific URL. Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchLinksGetCountReferringDomains}
	 */
	searchmetrics.prototype.researchLinksGetCountReferringDomains = function(query, callback) {
		this.request('ResearchLinksGetCountReferringDomains', query, callback);
	}

	/**
	 * This call returns the number of different IPs with at least one link to the given URL (IP popularity). The IP popularity is important for Google to discover artificially constructed link networks and remove them from a site’s popularity. The call returns as well information aboutthe number of referring IPs with different C/B class. An identical C-class in the IP is another sign for a possible connection between the referring IPs, e.g. a similar hosting provider or somehow otherwise “associated” environment. A high number of IP C classes shows Google that the links are very well distributed and are therefore probably natural. 
	 * @summary Number of referring IPs for a given URL (IP popularity).
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} Either a domain, a subdomain or an URL For a domain or a subdomain all results are counted that refer to any page of the domain or subdomain. For any other URL only results are counted that point directly to the page with this specific URL. Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchLinksGetCountReferringIps}
	 */
	searchmetrics.prototype.researchLinksGetCountReferringIps = function(query, callback) {
		this.request('ResearchLinksGetCountReferringIps', query, callback);
	}

	/**
	 * This call returns backlinks for a given URL including a lot of additional information. Retrieving high numbers of backlinks must eventually be done with several separate calls since the absolute number of rows per call is limited (details see below). 
	 * @summary Backlinks for a given URL
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} Either a domain, a subdomain or an URL For a domain or a subdomain all results are counted that refer to any page of the domain or subdomain. For any other URL only results are counted that point directly to the page with this specific URL. Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0 Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchLinksGetListBacklinks}
	 */
	searchmetrics.prototype.researchLinksGetListBacklinks = function(query, callback) {
		this.request('ResearchLinksGetListBacklinks', query, callback);
	}

	/**
	 * This call delivers the subpages of a given domain, subdomain or URL that are linked from external pages ordered by the number of external links. The page with the most external links is usually the homepage. However, often there are also strong subpages that can be used to distribute the link trust to other pages on the website. 
	 * @summary List of pages of a given URL with links from external pages
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} Either a domain, a subdomain or an URL For a domain or a subdomain all results are counted that refer to any page of the domain or subdomain. For any other URL only results are counted that point directly to the page with this specific URL. Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
	 * @param query.limit {String=} Limit for the number of returned link texts Permitted values are 10, 25, 50, 100, 250 Default is 10 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0 Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchLinksGetListLinkedPages}
	 */
	searchmetrics.prototype.researchLinksGetListLinkedPages = function(query, callback) {
		this.request('ResearchLinksGetListLinkedPages', query, callback);
	}

	/**
	 * This call returns the anchor texts of backlinks for a given URL, ordered by frequency of occurrence. A link is particularly strong when it already contains a keyword for which the linking site has a strong Google ranking. For this reason, anchor text analysis is a very important factor in ranking assessments. You should, however, be careful to make sure that anchor texts are not too similar and that the targeted keyword is not contained in every text. 
	 * @summary Most frequently used link anchor texts for a given URL.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} Either a domain, a subdomain or an URL For a domain or a subdomain all results are counted that refer to any page of the domain or subdomain. For any other URL only results are counted that point directly to the page with this specific URL. Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
	 * @param query.limit {String=} Limit for the number of returned link texts Permitted values are 10, 25, 50, 100, 250 Default is 10 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0 Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchLinksGetListLinktext}
	 */
	searchmetrics.prototype.researchLinksGetListLinktext = function(query, callback) {
		this.request('ResearchLinksGetListLinktext', query, callback);
	}

	/**
	 * Get a list of the current SPS distribution for a domain, subdomain or a single URL. Searchmetrics calculates for each page the page strength from the weighted backlinks that point to this page. A page with many links is given a high Searchmetrics Page Strength (SPS); a page with no or only a few links a low SPS. 
	 * @summary Distribution of incoming links according to Searchmetrics Page Strength
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} Either a domain, a subdomain or an URL For a domain or a subdomain all results are counted that refer to any page of the domain or subdomain. For any other URL only results are counted that point directly to the page with this specific URL. Format: domain.tld, subdomain.domain.tld, domain.tld/page.html
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchLinksGetListSpsSpread}
	 */
	searchmetrics.prototype.researchLinksGetListSpsSpread = function(query, callback) {
		this.request('ResearchLinksGetListSpsSpread', query, callback);
	}

	/**
	 * This call returns the Link Rank for a given domain in a given country, indicating the strength of the selected domain with regard to linking in comparison with all other domains of the country in question. The more links are pointing to the domain, the better the link rank. Also the strength of the links is taken into account in the unique algorithm used to calculate the Link Rank index. In addition, the call returns the Link Rank all-time-high for for the selected domain plus an average of the Link Rank of its competitors. 
	 * @summary Link Rank for a given domain in a given country
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.competitors {String} competitors of the given domain, several domains must be separated with a comma without blank. Format: domain1.tld,domain2.tld
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchLinksGetValueLinkRank}
	 */
	searchmetrics.prototype.researchLinksGetValueLinkRank = function(query, callback) {
		this.request('ResearchLinksGetValueLinkRank', query, callback);
	}

	/**
	 * This call returns the Searchmetrics Page Strength (SPS) an indicator for the value of a link from the respective page. The SPS, our version of PageRank, refers to the authority of links pointing to a domain. SPS factors in both quality and quantity of links from the referring domain based on a scale of 1 to 10, with 10 being the most authoritative. The higher the SPS, the more valuable is a link from this page. 
	 * @summary Searchmetrics Page Strength (SPS) for a given page.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} URL of a page Format: domain.tld/page.html
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchLinksGetValuePageStrength}
	 */
	searchmetrics.prototype.researchLinksGetValuePageStrength = function(query, callback) {
		this.request('ResearchLinksGetValuePageStrength', query, callback);
	}

	/**
	 * This call returns a list keywords of a domain that had rankings in the universal search results in Google in a given country, based on the latest results in our database. The result includes a lot of additional information (please check result description) and are ordered by estimated traffic in descending order. 
	 * @summary Keyword rankings for a given domain in universal search results.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Either a domain, a subdomain or a directory Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0 Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchUniversalGetListRankingsDomain}
	 */
	searchmetrics.prototype.researchUniversalGetListRankingsDomain = function(query, callback) {
		this.request('ResearchUniversalGetListRankingsDomain', query, callback);
	}

	/**
	 * This call returns a list keywords of a domain that had rankings in the universal search results in Google in a given country for a given date with several filter options. The result includes a lot of additional information (please check result description) and are ordered by estimated traffic in descending order. Please note that a certain subscription level may be needed to use this call. 
	 * @summary Historic keyword rankings for a given domain in universal search results with filter options.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.date {String} Date for which the universal rankings are queried Format: YYYYMMDD
	 * @param query.type {String} Universal search type. Possible values are universal, news, maps, video, images and shopping. Format: string (e.g type4, type5 etc.)
	 * @param query.url {String} Either a domain, a subdomain or a directory Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
	 * @param query.currency {String=} Currency code as specified in ISO 4217. Default is "EUR". Format: EUR, USD etc.
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0 Format: integer
	 * @param query.position_from {String=} Filter: Lowest ranking of keywords that should be returned. E.g. if you want all keywords starting from the position 4 (meaning 4,5,6 etc.) this parameter has to be set to "4". Format: integer
	 * @param query.position_to {String=} Filter: Highest ranking of keywords that should be returned. E.g. if you want all keywords up to position 3 ( resulting in all keywords with a SERP of 1, 2 or 3) this parameter has to be set to "3". Format: integer
	 * @param query.search_volume_monthly_from {String=} Filter: Lowest monthly search volume in Google for returned keywords. E.g. if you want all keywords with a minimum estimated search volume of 300 this parameter has to be set to "300". Format: integer
	 * @param query.search_volume_monthly_to {String=} Filter: Highest estimated monthly search volume for returned keywords. E.g. if you want all keywords with a maximum estimated monthly search volume of 1000 this parameter has to be set to "1000". Format: integer
	 * @param query.traffic_monthly_from {String=} Filter: Lowest estimated traffic for returned keywords. E.g. if you want all keywords with a minimum estimated traffic of 300 visitors this parameter has to be set to "300". Format: integer
	 * @param query.traffic_monthly_to {String=} Filter: Highest estimated traffic for returned keywords. E.g. if you want all keywords with a maximum estimated traffic of 1000 visitors this parameter has to be set to "1000". Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchUniversalGetListRankingsDomainFilter}
	 */
	searchmetrics.prototype.researchUniversalGetListRankingsDomainFilter = function(query, callback) {
		this.request('ResearchUniversalGetListRankingsDomainFilter', query, callback);
	}

	/**
	 * This call returns a list keywords of a domain that had rankings in the universal search results in Google in a given country for a given date. The result includes a lot of additional information (please check result description) and are ordered by estimated traffic in descending order. Please note that a certain subscription level may be needed to use this call. 
	 * @summary Historic keyword rankings for a given domain in universal search results
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: http://api.searchmetrics.com/api-calls/countries
	 * @param query.date {String} Date for which the universal rankings are queried Format: YYYYMMDD
	 * @param query.url {String} Either a domain, a subdomain or a directory Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0 Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchUniversalGetListRankingsDomainHistoric}
	 */
	searchmetrics.prototype.researchUniversalGetListRankingsDomainHistoric = function(query, callback) {
		this.request('ResearchUniversalGetListRankingsDomainHistoric', query, callback);
	}

	/**
	 * This call returns the Searchmetrics Visibility in the Universal Search for a domain for a specified country based on the latest data in our database. The Visibility is composed of search volume and the position of universal keyword rankings and reflects how present a website is in the universal search results. The Visibility is split into the different universal search types (images, video, news etc.) 
	 * @summary Searchmetrics Visibility for Universal Search for a given URL in a given country.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Either a domain, a subdomain or a directory Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchUniversalGetListVisibility}
	 */
	searchmetrics.prototype.researchUniversalGetListVisibility = function(query, callback) {
		this.request('ResearchUniversalGetListVisibility', query, callback);
	}

	/**
	 * This call returns the Facebook Social Visibility for URLs of a given domain, split in shares, likes etc. and sorted in descending order by the number of likes. 
	 * @summary Facebook interaction per URL for a given domain (likes, shares etc.)
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} Either a domain, a subdomain or a directory Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10. Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchSocialGetListFacebook}
	 */
	searchmetrics.prototype.researchSocialGetListFacebook = function(query, callback) {
		this.request('ResearchSocialGetListFacebook', query, callback);
	}

	/**
	 * This call returns the Social Visibility for URLs of a given domain, sorted in descending order by Social Visibility. The Social Visibility is an indicator for the performance on leading social networks (Facebook, Twitter, LinkedIn, Google+1, Pinterest). Social Visibility includes user actions, such as liking or sharing the domain in the social media space (e.g. via Facebook’s like button). The different user actions are weighted differently depending on the influence of the network. A higher Social Visibility score indicates more popularity and interactions in the social media space. 
	 * @summary Social Visibility (Facebook, Twitter etc.) per URL for a given domain
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} Either a domain, a subdomain or a directory Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10. Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchSocialGetListTopUrls}
	 */
	searchmetrics.prototype.researchSocialGetListTopUrls = function(query, callback) {
		this.request('ResearchSocialGetListTopUrls', query, callback);
	}

	/**
	 * This call returns the ranking of a domain in comparison with the Social Visibility Values of all other listed domains of a specific country, indicating the domains position in the countrys social sphere. For example, if a domain has a social rank of 2, this means that the domain has the second highest social visibility in the country in question. The Social Visibility is created using a unique algorithm, which includes both ratings (e.g. likes and comments) and URL sharing (e.g. over Twitter) for the domain. The various actions are weighted differently depending on their impact on visibility. In addition, the call returns the Social Rank all-time-high for for the selected domain plus a median of the Social Rank of its competitors. 
	 * @summary Social Visibility Rank for a given domain in a given country
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.countrycode {String} A two letter country code as specified in ISO 3166-1 Format: US, GB, DE etc.
	 * @param query.url {String} Either a domain or subdomain Format: domain.tld, subdomain.domain.tld
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchSocialGetValueSocialRank}
	 */
	searchmetrics.prototype.researchSocialGetValueSocialRank = function(query, callback) {
		this.request('ResearchSocialGetValueSocialRank', query, callback);
	}

	/**
	 * This call returns the Social Spread for a given domain or subdomain. The Social Spread is the social link distribution across all monitored networks like Facebook, Twitter and Google +1. For the distribution not only the absolute quantity of social actions is relevant but also the type. Actions with a more complex activity level such as a comment count more than a simple activity like the click on a "like"-button. 
	 * @summary Social Spread for a given domain
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} Either a domain, a subdomain or a directory Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchSocialGetValueSocialSpread}
	 */
	searchmetrics.prototype.researchSocialGetValueSocialSpread = function(query, callback) {
		this.request('ResearchSocialGetValueSocialSpread', query, callback);
	}

	/**
	 * This call returns the Social Spread for a given domain, subdomain or directory or specific URL for a given week Please note that a certain subscription level may be needed to use this call. 
	 * @summary Social Spread for a given domain, subdomain,directory or URL with historic data
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.date_from {String} Start UNIX timestamp. Please see www.unixtimestamp.com for details. Format: integer
	 * @param query.date_to {String} End UNIX timestamp. Please see www.unixtimestamp.com for details. Format: integer
	 * @param query.url {String} Either a domain, subdomain or directory. If this value is entered the call returns the cumulated social spread for all URLs that contain the string entered here. Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchSocialGetValueSocialSpreadFilter}
	 */
	searchmetrics.prototype.researchSocialGetValueSocialSpreadFilter = function(query, callback) {
		this.request('ResearchSocialGetValueSocialSpreadFilter', query, callback);
	}

	/**
	 * This call returns the Social Spread for a given domain or subdomain for a given week Please note that a certain subscription level may be needed to use this call. 
	 * @summary Social Spread for a given domain with historic data
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.date_from {String} Start UNIX timestamp. Please see www.unixtimestamp.com for details. Format: integer
	 * @param query.date_to {String} End UNIX timestamp. Please see www.unixtimestamp.com for details. Format: integer
	 * @param query.url {String} Either a domain, a subdomain or a directory Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchSocialGetValueSocialSpreadHistoric}
	 */
	searchmetrics.prototype.researchSocialGetValueSocialSpreadHistoric = function(query, callback) {
		this.request('ResearchSocialGetValueSocialSpreadHistoric', query, callback);
	}

	/**
	 * This call returns the Social Visibility for a given domain or subdomain on leading social networks (Facebook, Twitter, LinkedIn, Google+1, Pinterest). Social Visibility includes user actions, such as liking or sharing the domain in the social media space (e.g. via Facebook’s like button). The different user actions are weighted differently depending on the influence of the network. What does Social Visibility show us? A higher Social Visibility score of a domain indicates more popularity and interactions in the social media space. Comparing a domain with thematically similar websites or competitors helps to assess the strength of the domain in the market as well as identify potential growth opportunities. 
	 * @summary Social Visibility for a given domain
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.url {String} Either a domain, subdomain or directory. If this value is entered the call returns the cumulated visibility for all URLs that contain the string entered here. Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchSocialGetValueVisibility}
	 */
	searchmetrics.prototype.researchSocialGetValueVisibility = function(query, callback) {
		this.request('ResearchSocialGetValueVisibility', query, callback);
	}

	/**
	 * This call returns the Social Visibility for a given URL on leading social networks (Facebook, Twitter, LinkedIn, Google+1, Pinterest) for a given week for a given url or directory. Social Visibility includes user actions, such as liking or sharing the domain in the social media space (e.g. via Facebook’s like button). The different user actions are weighted differently depending on the influence of the network. What does Social Visibility show us? A higher Social Visibility score of a domain indicates more popularity and interactions in the social media space. Comparing a domain with thematically similar websites or competitors helps to assess the strength of the domain in the market as well as identify potential growth opportunities. Please note that a certain subscription level may be needed to use this call. 
	 * @summary Historic Social Visibility for a given URL or directory for a given week
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.date_from {String} Start UNIX timestamp. Please see www.unixtimestamp.com for details. Format: integer
	 * @param query.date_to {String} End UNIX timestamp. Please see www.unixtimestamp.com for details. Format: integer
	 * @param query.url {String} Either a domain, subdomain or directory. If this value is entered the call returns the cumulated visibility for all URLs that contain the string entered here. Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchSocialGetValueVisibilityFilter}
	 */
	searchmetrics.prototype.researchSocialGetValueVisibilityFilter = function(query, callback) {
		this.request('ResearchSocialGetValueVisibilityFilter', query, callback);
	}

	/**
	 * This call returns the Social Visibility for a given domain or subdomain on leading social networks (Facebook, Twitter, LinkedIn, Google+1, Pinterest) for a given week. Social Visibility includes user actions, such as liking or sharing the domain in the social media space (e.g. via Facebook’s like button). The different user actions are weighted differently depending on the influence of the network. What does Social Visibility show us? A higher Social Visibility score of a domain indicates more popularity and interactions in the social media space. Comparing a domain with thematically similar websites or competitors helps to assess the strength of the domain in the market as well as identify potential growth opportunities. Please note that a certain subscription level may be needed to use this call. 
	 * @summary Historic Social Visibility for a given domain for a given week
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.date_from {String} Start UNIX timestamp. Please see www.unixtimestamp.com for details. Format: integer
	 * @param query.date_to {String} End UNIX timestamp. Please see www.unixtimestamp.com for details. Format: integer
	 * @param query.url {String} Either a domain, subdomain or directory. If this value is entered the call returns the cumulated visibility for all URLs that contain the string entered here. Format: domain.tld, subdomain.domain.tld, domain.tld/directory/
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ResearchSocialGetValueVisibilityHistoric}
	 */
	searchmetrics.prototype.researchSocialGetValueVisibilityHistoric = function(query, callback) {
		this.request('ResearchSocialGetValueVisibilityHistoric', query, callback);
	}

	/**
	 * This call returns the rankings for the monitored keywords for a domain (either a project or a benchmark domain) in the organic search results in a given country, based on the latest month available in the database. The results contain a lot of additional information (please check result description) and are orderd by estimated traffic in descending order. Please note: The API key for this call must be from the account that owns the queried project. API keys from invited users do not work. 
	 * @summary Keyword rankings for a project or benchmark domain in organic search results
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.project_id {String} ID of the project that should be queried. The ID can be found in the URL when viewing the project in the Searchmetrics Suite. Format: Integer
	 * @param query.se_id {String} ID of the search engine that should be queried. A complete list of IDs can be found http://api.searchmetrics.com/api-calls/searchengines. Please make sure your project includes the se_id." Format: integer
	 * @param query.url {String} Domains within the project that should be queried. Several domains must be separated with a comma without blank. Please use the exact name that is used within the project. E.g "www.searchmetrics.com" instead of "searchmetrics.com". Format: domain1.tld,domain2.tld
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Format: integer
	 * @param query.trend_interval {String=} Set the time range for the trend comparisons. To compare the actual results with the last results use "last" (default). Other possible values are "weekly" (last week) and monthly (last month). Format: string
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ProjectOrganicGetListRankings}
	 */
	searchmetrics.prototype.projectOrganicGetListRankings = function(query, callback) {
		this.request('ProjectOrganicGetListRankings', query, callback);
	}

	/**
	 * This call returns the rankings for the monitored keywords for a domain (either a project or a benchmark domain) in the organic search results in a given country, based on a given date. The results contain a lot of additional information (please check result description), are orderd by estimated traffic in descending order and can be filtered by various options. Please note: The API key for this call must be from the account that owns the queried project. API keys from invited users do not work. Please note that a certain subscription level may be needed to use this call. 
	 * @summary Keyword rankings for a project or benchmark domain in organic search results with various filter options
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.project_id {String} ID of the project that should be queried. The ID can be found in the URL when viewing the project in the Searchmetrics Suite Format: integer
	 * @param query.se_id {String} ID of the search engine that should be queried. A complete list of IDs can be found http://api.searchmetrics.com/api-calls/searchengines. Please make sure your project includes the se_id. Format: integer
	 * @param query.url {String} Domains within the project that should be queried. Several domains must be separated with a comma without blank. Please use the exact name that is used within the project. E.g "www.searchmetrics.com" instead of "searchmetrics.com". Format: domain1.tld,domain2.tld
	 * @param query.cpc_from {String=} Filter: Lowest estimated CPC for returned keywords. E.g. if you want all keywords with a minimum estimated CPC of 1€ visitors this parameter has to be set to "1". Format: integer
	 * @param query.cpc_to {String=} Filter: Highest estimated CPC for returned keywords. E.g. if you want all keywords with a maximum estimated CPC of 2 this parameter has to be set to "2". Format: integer
	 * @param query.date {String=} Date for which the rankings should be queried Format: YYYYMMDD
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Default is 10 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Default is 0 Format: integer
	 * @param query.position_from {String=} Filter: Lowest ranking of keywords that should be returned. E.g. if you want all keywords starting from the position 4 (meaning 4,5,6 etc.) this parameter has to be set to "4". Format: integer
	 * @param query.position_to {String=} Filter: Highest ranking of keywords that should be returned. E.g. if you want all keywords up to position 3 ( resulting in all keywords with a SERP of 1, 2 or 3) this parameter has to be set to "3". Format: integer
	 * @param query.searchvolume_from {String=} Filter: Lowest monthly search volume in Google for returned keywords. E.g. if you want all keywords with a minimum estimated search volume of 300 this parameter has to be set to "300". Format: integer
	 * @param query.searchvolume_to {String=} Filter: Highest estimated monthly search volume for returned keywords. E.g. if you want all keywords with a maximum estimated monthly search volume of 1000 this parameter has to be set to "1000". Format: integer
	 * @param query.traffic_from {String=} Filter: Lowest estimated traffic for returned keywords. E.g. if you want all keywords with a minimum estimated traffic of 300 visitors this parameter has to be set to "300". Format: integer
	 * @param query.traffic_to {String=} Filter: Highest estimated monthly search volume for returned keywords. E.g. if you want all keywords with a maximum estimated monthly search volume of 1000 this parameter has to be set to "1000". Format: integer
	 * @param query.trend_interval {String=} Set the time range for the trend comparisons. To compare the actual results with the last results use "last" (default). Other possible values are "weekly" (last week) and monthly (last month). Format: string
	 * @param query.type {String=} Universal search type. Possible values are universal, news, maps, video, images and shopping. Format: string
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ProjectOrganicGetListRankingsFilter}
	 */
	searchmetrics.prototype.projectOrganicGetListRankingsFilter = function(query, callback) {
		this.request('ProjectOrganicGetListRankingsFilter', query, callback);
	}

	/**
	 * This call returns the rankings for the monitored keywords for a domain (either a project or a benchmark domain) in the organic search results in a given country, based on a given date. The results contain a lot of additional information (please check result description) and are orderd by estimated traffic in descending order. Please note: The API key for this call must be from the account that owns the queried project. API keys from invited users do not work. Please note that a certain subscription level may be needed to use this call. 
	 * @summary Historic keyword rankings for a project or benchmark domain in organic search results
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.project_id {String} ID of the project that should be queried. The ID can be found in the URL when viewing the project in the Searchmetrics Suite. Format: integer
	 * @param query.se_id {String} ID of the search engine that should be queried. A complete list of IDs can be found http://api.searchmetrics.com/api-calls/searchengines. Please make sure your project includes the se_id. Format: integer
	 * @param query.url {String} Domains within the project that should be queried. Several domains must be separated with a comma without blank. Please use the exact name that is used within the project. E.g "www.searchmetrics.com" instead of "searchmetrics.com". Format: domain1.tld,domain2.tld
	 * @param query.date {String=} Date for which the rankings should be queried Format: YYYYMMDD
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Format: integer
	 * @param query.trend_interval {String=} Set the time range for the trend comparisons. To compare the actual results with the last results use "last" (default). Other possible values are "weekly" (last week) and monthly (last month). Format: string
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ProjectOrganicGetListRankingsHistoric}
	 */
	searchmetrics.prototype.projectOrganicGetListRankingsHistoric = function(query, callback) {
		this.request('ProjectOrganicGetListRankingsHistoric', query, callback);
	}

	/**
	 * This call returns the Searchmetrics Visibility in the organic search for a project based on the latest data in our database. Project SEO Visibility differs from general SEO Visibility in that it uses a project’s selected keywords to evaluate visibility. It is made up of ranking keywords’ search volumes and positions. Within these figures, each position is ranked individually according to factors determined by Searchmetrics. The nature of a keyword, as either a ranking or navigational keyword, equally influences SEO visibility. Please note: The API key for this call must be from the account that owns the queried project. API keys from invited users do not work. 
	 * @summary Get the SEO visibility for a project or for the tags of a project.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.project_id {String} ID of the project that should be queried. The ID can be found in the URL when viewing the project in the Searchmetrics Suite. Format: integer
	 * @param query.se_id {String} ID of the search engine that should be queried. A complete list of IDs can be found http://api.searchmetrics.com/api-calls/searchengines. Please make sure your project includes the se_id. Format: integer
	 * @param query.url {String} Domains within the project that should be queried. Several domains must be separated with a comma without blank. Please use the exact name that is used within the project. E.g "www.searchmetrics.com" instead of "searchmetrics.com". Format: string
	 * @param query.tags {String=} Comma separated list of tags. Please note: When using more than one tag only keywords with both tags will be included Format: string
	 * @param query.trend_interval {String=} Set the time range for the trend comparisons. To compare the actual results with the last results use "last" (default). Other possible values are "weekly" (last week) and "monthly" (last month). Format: string
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ProjectOrganicGetValueSeoVisibility}
	 */
	searchmetrics.prototype.projectOrganicGetValueSeoVisibility = function(query, callback) {
		this.request('ProjectOrganicGetValueSeoVisibility', query, callback);
	}

	/**
	 * This call returns a list of all identified errors, warnings and notices. The field [potential] indicates the amount that each error influences your Domain Score. Special attention should be given to errors with greater potential. Trending results are also critical – are there any errors, warnings or notices that have increased a lot since the last crawl? If so, take a closer look and dig deeper by checking the URLs. Please note: The API key for this call must be from the account that owns the queried project. API keys from invited users do not work. 
	 * @summary Site optimization: errors, warnings and notices.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.project_id {String} ID of the project that should be queried. The ID can be found in the URL when viewing the project in the Searchmetrics Suite. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ProjectOptimizationGetListDomainErrors}
	 */
	searchmetrics.prototype.projectOptimizationGetListDomainErrors = function(query, callback) {
		this.request('ProjectOptimizationGetListDomainErrors', query, callback);
	}

	/**
	 * The Optimization Domain Score measures a project’s optimization level. Domain Score is calculated using the number of identified errors, warnings and suggestions according to the number of analyzed pages. The higher the Domain Score, the better a site is optimized. Please note: The API key for this call must be from the account that owns the queried project. API keys from invited users do not work. 
	 * @summary Get the current Optimization Domain Score with a trend for the last crawl
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.project_id {String} ID of the project that should be queried. The ID can be found in the URL when viewing the project in the Searchmetrics Suite. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/ProjectOptimizationGetValueDomainScore}
	 */
	searchmetrics.prototype.projectOptimizationGetValueDomainScore = function(query, callback) {
		this.request('ProjectOptimizationGetValueDomainScore', query, callback);
	}

	/**
	 * This call returns a complete list of all projects for the sublicense of your API key. 
	 * @summary Get a list of projects for the current sublicense.
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.limit {String=} Limit for the number of result rows Permitted values are 10, 25, 50, 100, 250 Format: integer
	 * @param query.offset {String=} Offset for result set Must be a multiple of allowed values for the parameter "limit" Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/AdminStatusGetListProjects}
	 */
	searchmetrics.prototype.adminStatusGetListProjects = function(query, callback) {
		this.request('AdminStatusGetListProjects', query, callback);
	}

	/**
	 * Get a list of all search engines used in a project. With the IDs of the search engines you can use the ranking services to get ranking data for a specific search engine within your project. 
	 * @summary Lists all available search engines for a given project
	 * @param {Object} query The query parameters which will be sent to the api
	 * @param query.project_id {String} ID of the project that should be queried. The ID can be found in the URL when viewing the project in the Searchmetrics Suite. Format: integer
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/AdminStatusGetListProjectSearchEngines}
	 */
	searchmetrics.prototype.adminStatusGetListProjectSearchEngines = function(query, callback) {
		this.request('AdminStatusGetListProjectSearchEngines', query, callback);
	}

	/**
	 * This call returns the amount of available credits for the current period. 
	 * @summary Returns the amount of available credits
	 * @param {searchmetrics~ApiCallback} callback
	 * @see {@link http://api.searchmetrics.com/api-calls/service/v1/AdminStatusGetValueAvailableCredits}
	 */
	searchmetrics.prototype.adminStatusGetValueAvailableCredits = function(callback) {
		this.request('AdminStatusGetValueAvailableCredits', callback);
	}

};