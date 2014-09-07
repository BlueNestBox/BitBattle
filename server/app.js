/**
 * Main application file
 */

'use strict';

var _ = require('lodash');

var config = {};

// Assign command-line arguments to config
process.argv.forEach(function(arg){
  if(arg.slice(0,2) == '--'){
    var split = arg.slice(2).split('=');
    if(split.length == 1){
      config[split[0]] = true;
    }else if(split.length == 2){
      config[split[0]] = split[1];
    }
  }

});

// Set default node environment to development
process.env.NODE_ENV = config.env || process.env.NODE_ENV || 'development';

var express = require('express');
var mongoose = require('mongoose');
config = _.merge(
  config,
  require('./config/environment')
);

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options);

// Populate DB with sample data
if(config.seedDB) { require('./config/seed'); }

// Setup server
var app = express();
var server = require('http').createServer(app);
var socketio = require('socket.io').listen(server);
require('./config/socketio')(socketio);
require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;
