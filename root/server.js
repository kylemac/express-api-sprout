// Dependencies
var express  = require('express');
var app      = express();
var morgan   = require('morgan');
var bParser  = require('body-parser');
var jwt      = require('jsonwebtoken');
var respond  = require('');

// Server config
require('./config/config').serverConfig(app, bParser, morgan);

var routes = require('./indexRoutes');

app.get('/', function(req, res) {
  res.send("Awww yeah! Let's do this!");
});

app.use('api/v1', routes);

var server = require('./config/config').serverConf
app.listen(server.port);
console.log(`Running at ${server.port}`);