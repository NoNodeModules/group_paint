"use strict";

var express = require("express");
var app = express();
const port = 8081;

var server = app.listen(port, function(){
    console.log("Listening on " + port);
});

// Everything contained in the "public" folder will be served
app.use(express.static("public"));

// Create socket
var socket = require("socket.io");
var io = socket(server);

// Server listening (client config in index.html)
io.on('connection', function(socket){
    console.log(`neuer client (${socket.id}) von ${socket.conn.remoteAddress}`);
});





