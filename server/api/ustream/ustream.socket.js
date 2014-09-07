/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Ustream = require('./ustream.model');

exports.register = function(socket) {
  // Ustream.schema.post('save', function (doc) {
  //   onSave(socket, doc);
  // });
  // Ustream.schema.post('remove', function (doc) {
  //   onRemove(socket, doc);
  // });
}

function onSave(socket, doc, cb) {
  // socket.emit('ustream:save', doc);
}

function onRemove(socket, doc, cb) {
  // socket.emit('ustream:remove', doc);
}
