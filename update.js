/*
------------------------------------------------------------
# update.js
: update redis with
------------------------------------------------------------
*/ 

// dependencies
var reqxml = require( './utils/reqxml.js' ),
	_ = require( 'lodash' );

// config
var options = ({
  'headers': {
    'Accept-Encoding': 'gzip'
  },
  url: 'http://www.teamliquid.net/video/streams/?xml=1'
});

// request xml
reqxml( options, function( result ) {
  update( result );
});

function update( streams ) {
  
  // check for stream format
  if( _( streams ).has( 'streamlist' ) ) {
		if( _( streams.streamlist ).has( 'stream' ) ) {
			console.log( 'xml list found' );
		} else {
			console.log( 'xml error: stream not found.' );
			return false;
		} 
  } else {
	  console.log( 'xml error: streamlist not found.' );
	  return false;
  }
  
  // iterate over streams
  _( streams.streamlist.stream ).each( function( s ) {
		console.log ( s );
  });
}
