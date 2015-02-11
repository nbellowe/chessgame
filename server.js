var express = require('express');
var _ = require('underscore');
var app = express();

var config = require('./src/config');
var program = require('./src/program');

 
app.set('view engine', 'ejs');
app.set('view options', { layout: false });
app.use('/lib', express.static('lib'));

app.get('/', function (req, res) {
  res.render('index', { pattern: null });
});

app.listen(process.env.PORT || config.port);
console.log("Listening on port: " + (process.env.PORT || config.port));
