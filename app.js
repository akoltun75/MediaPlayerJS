
//Server side of media player application
//Some code was found but modified from Donald Derek's website
//Working on code to handle multiple commands

var express = require('express');
var app = express();  
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var port = process.env.PORT || 8080;
var exec = require('child_process').exec;
  
//Listens for webpage to be accessed from port, both internally and externally
server.listen(port, function(){
  console.log('listening on *:' + port);
});

//Send index file to be generated
app.get('/', function(req, res){
  res.sendFile(__dirname + '/MainPage.html');
});

//When receiving omxplayer commands, execute it
io.on('connection', function(socket){
  socket.on('omxCommand', function(cmd){
  exec(cmd);
  });
});


