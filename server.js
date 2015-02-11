var express = require('express');
var config = require('./src/config');

var app = express();
var http = require('http').Server(app)
var io = require('socket.io')(http);

var port = process.env.PORT || config.port;

http.listen(port);
 
//Server's IP address
app.set("ipaddr", "127.0.0.1");

//Server's port number 
app.set("port", port);

app.set('view engine', 'ejs');
app.set('view options', { layout: false });
app.use('/lib', express.static('lib'));

/* Server routing */

//Handle route "GET /", as in "http://localhost:3000/"
app.get("/", function(request, response) {
  response.render('index');
});

//Start the http server at port and IP defined before
http.listen(app.get("port"), app.get("ipaddr"), function() {
  console.log("Server up and running. Go to http://" + app.get("ipaddr") + ":" + app.get("port"));
});

console.log("Listening on port: " + (process.env.PORT || config.port));
