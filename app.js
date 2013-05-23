/*
------------------------------------------------------------
# app.js
: get xml as a parse js object
------------------------------------------------------------
*/ 

// dependencies
var reqxml = require('./utils/reqxml.js');

// config
var src = ({
	'headers': {
		'Accept-Encoding': 'gzip'
	},
	url:'http://www.teamliquid.net/video/streams/?xml=1'
});

// request xml
reqxml(
	src, 
	function(xml){
		console.log('got xml');
	}
);
