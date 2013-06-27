/*
------------------------------------------------------------
# app.js
: application logic
------------------------------------------------------------
*/ 

// config

var config = {
  port: 80
}

// dependencies

var express  = require( 'express'),
  app = express(),
  io = require( 'socket.io' ).listen(app.listen( config.port ));




// static

app.use( express.static( __dirname + '/public' ) );

// socket io

io.sockets.on( 'connection', function( socket ) {
  socket.emit( 'something', { hello: 'world' });
  socket.on( 'other event', function ( data ) {
    console.log( data );
  });
});