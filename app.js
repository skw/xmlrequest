/*
------------------------------------------------------------
# app.js
------------------------------------------------------------
*/ 

// dependencies
var requestxml = require('./requestxml.js');

// config
var src = ({
	'headers': {
		'Accept-Encoding': 'gzip'
	},
	url:'http://www.teamliquid.net/video/streams/?xml=1'
});

var xml = requestxml(src);
xml.on('data', function(data){
	console.log(data);
});