/*
------------------------------------------------------------
# requestxml.js
: get xml from http request and parse XML
------------------------------------------------------------
*/ 

// dependencies
var	request = require('request'),
		zlib = require('zlib'),
		parseString = require('xml2js').parseString;

var reqxml = function(options,callback) {
	
	// make a request
	req = function(options) {
		var res = request(options, function (err,res,body) {
			if (!err){
				return body;
			} else {
				console.log(err);
				//return new Error(err);
			}
		});
		zip(res);
	},
	
	// gunzip response
	zip = function(res) {
		var	gunzip = zlib.createGunzip(), xml = "";
				
		gunzip.on('data', function(data) {
			xml += data.toString();
		}); 
	
		gunzip.on('end', function() {
			parse(xml);
		});
		res.pipe(gunzip);
	},

	// parse xml
	parse = function(xml){
		parseString(xml, function(err,result) {
				if (!err) {
					callback(result);	
				}else{
					console.log(err);
					//return new Error(err);
				}
		});	
	},
	
	//init
	index = req(options)	
};

module.exports = reqxml;
