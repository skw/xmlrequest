/*
------------------------------------------------------------
# update.js
: update redis with
------------------------------------------------------------
*/ 

// dependencies
var reqxml = require('./utils/reqxml.js');

// config
var options = ({
	'headers': {
		'Accept-Encoding': 'gzip'
	},
	url:'http://www.teamliquid.net/video/streams/?xml=1'
});

// request xml
reqxml(options, function(result){
	update(result);
});

function update(streams){
	
}
