/**
 * Broadcast updates to client when the model changes
 */

'use strict';

// var KioskGetChallenge = require('./kiosk/get-challenge.model');

exports.register = function(socket) {
  // KioskGetChallenge.schema.post('save', function (doc) {
  //   onSave(socket, doc);
  // });
  // KioskGetChallenge.schema.post('remove', function (doc) {
  //   onRemove(socket, doc);
  // });
}

function onSave(socket, doc, cb) {
  // socket.emit('kiosk/get-challenge:save', doc);
}

function onRemove(socket, doc, cb) {
  // socket.emit('kiosk/get-challenge:remove', doc);
}
