# searchmetrics
A thin abstraction layer for the searchmetrics api. It's auto generated from the current api docs at http://api.searchmetrics.com.

The motivation to develop this library was to provide an bullet prove and well documented (also code documented) way to write some nice
apps based upon the searchmetrics api like an real time dashboard, which shows the ups and downs of our customers.

[API Documentation](http://linuxdoku.github.io/searchmetrics/doc/searchmetrics.html) | [NPM Registry](https://npmjs.org/package/searchmetrics)

# Install
Simply hack in your machines terminal:
```bash
npm install searchmetrics
```

# Usage
```javascript
var searchmetrics = require('searchmetrics')('your api key', 'your api secret');
searchmetrics.researchOrganicGetValueSeoVisibility({
	url: 'linux-doku.de'
}, function(data) {
	console.log(data);
})
```
will result in
```
{ visibility: 0, trend: { trend: 0, abs: 0, per: null } }
```
ok not realy search engine optimized, but now I have this nice tool so I'll gonna change this ;-)

# Documentation
Because the complete api endpoint source code is auto generated form the api doc's also the inline source code documentation is
done by magic hands. So simply look at the documentation in the **doc** folder. If the doc folder is not generated properly
type in this command, wait a moment and be suprized:
```bash
jsdoc -c conf.json
``` 

# Development
To regenerate the `endpoints.js` from the searchmetrics api docs type the following command in the root of the module folder:
```bash
node build/generate.js
```
after that, you can regenerate the documentation
```bash
jsdoc -c conf.json
```

The `generate.js` will take some time, cause it gets a list of all api endpoints, and then requests every single endpoint page to
grab the parameters, documentation, etc. With this information the code will be generated and written to the `endpoints.js` file,
which is automatically required in the `searchmetrics.js` main module file.