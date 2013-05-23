/*
------------------------------------------------------------
# requestxml.js
: get xml from http request and parse XML
------------------------------------------------------------
*/ 

// dependencies
var	request = require('request'),
		zlib 		= require('zlib'),
		libxml 	= require('libxmljs');

var reqxml;

reqxml = function(options,callback){
	
	// make a request
	req = function(options){
		var res = request(
			options, 
			function (err,res,body){
				if (!err){
					return body;
				} else {
					console.log('error! ' + err);
					return new Error(err);
				}
			}
		);
		zip(res);
	},
	
	// gunzip response
	zip = function(res){
		var	gunzip 	= zlib.createGunzip(),
				xml 		= "";
				
		gunzip.on('data', function(data){
			xml += data.toString();
		}); 
	
		gunzip.on('end', function(){
			parse(xml);
		});
		res.pipe(gunzip);
	},

	// parse xml
	parse = function(xml){
		//console.log(xml);
		var parsed = libxml.parseXmlString(xml);
		callback(xml);
	},
	
	//init
	index = req(options)	
};

module.exports = reqxml;
