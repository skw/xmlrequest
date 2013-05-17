/*
------------------------------------------------------------
# requestxml.js
# get xml from http request and parse XML
------------------------------------------------------------
*/ 

// dependencies
var	request = require('request'),
		zlib 		= require('zlib'),
		libxml 	= require('libxmljs');

var requestxml;

requestxml = function(options,callback){

	// make request
	makeReq = function(options){
		var res = request(options, function (err,res,body){
			if (!err){
				return body;
			} else {
				console.log('error! ' + err)
			}
		});
		gunzipRes(res);
	},
	
	// gunzip response
	gunzipRes = function(res){
		var	gunzip = zlib.createGunzip(),
				xml = "";
				
		gunzip.on('data', function(data){
			xml += data.toString();
		}); 
	
		gunzip.on('end', function(){
			parseXML(xml);
		});
		res.pipe(gunzip);
	},
	
	// parse XML
	parseXML = function(xml){
		//console.log(xml);
		//var xml = libxml.parseXmlString(xml);
		return xml;
	},
	//callback = makeReq
	xml = makeReq(options)
	//return xml;
	//console.log(xml);
	
};

module.exports = requestxml;
