'use strict';

var _ = require('lodash')
  , http = require('http')
// var Ustream = require('./ustream.model');

// Get list of ustreams
exports.index = function(req, res) {
  var url = "http://api.ustream.tv/channels/18858917.json"

  http.get(url, function(ajaxRes) {
    var body = '';

    ajaxRes.on('data', function(chunk) {
        body += chunk;
    });

    ajaxRes.on('end', function() {
        res.send(JSON.parse(body))
    });
  }).on('error', function(e) {
        // console.log("Got error: ", e);

    return res.send(500, err);
  });

};

exports.error = function(req, res) {
  res.send('herp')
}

function handleError(res, err) {
  return res.send(500, err);
}
