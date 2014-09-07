/**
 * Broadcast updates to client when the model changes
 */

'use strict';

// var KioskConfirm = require('./kiosk/confirm.model');

exports.register = function(socket) {
  // KioskConfirm.schema.post('save', function (doc) {
  //   onSave(socket, doc);
  // });
  // KioskConfirm.schema.post('remove', function (doc) {
  //   onRemove(socket, doc);
  // });
}

function onSave(socket, doc, cb) {
  // socket.emit('kiosk/confirm:save', doc);
}

function onRemove(socket, doc, cb) {
  // socket.emit('kiosk/confirm:remove', doc);
}
