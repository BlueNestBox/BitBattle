'use strict';

var _ = require('lodash');
var KioskPerform = require('./kiosk/perform.model');

// Get list of kiosk/performs
// exports.index = function(req, res) {
//   KioskPerform.find(function (err, kiosk/performs) {
//     if(err) { return handleError(res, err); }
//     return res.json(200, kiosk/performs);
//   });
// };

// // Get a single kiosk/perform
// exports.show = function(req, res) {
//   KioskPerform.findById(req.params.id, function (err, kiosk/perform) {
//     if(err) { return handleError(res, err); }
//     if(!kiosk/perform) { return res.send(404); }
//     return res.json(kiosk/perform);
//   });
// };

// // Creates a new kiosk/perform in the DB.
// exports.create = function(req, res) {
//   KioskPerform.create(req.body, function(err, kiosk/perform) {
//     if(err) { return handleError(res, err); }
//     return res.json(201, kiosk/perform);
//   });
// };

// // Updates an existing kiosk/perform in the DB.
// exports.update = function(req, res) {
//   if(req.body._id) { delete req.body._id; }
//   KioskPerform.findById(req.params.id, function (err, kiosk/perform) {
//     if (err) { return handleError(res, err); }
//     if(!kiosk/perform) { return res.send(404); }
//     var updated = _.merge(kiosk/perform, req.body);
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//       return res.json(200, kiosk/perform);
//     });
//   });
// };

// // Deletes a kiosk/perform from the DB.
// exports.destroy = function(req, res) {
//   KioskPerform.findById(req.params.id, function (err, kiosk/perform) {
//     if(err) { return handleError(res, err); }
//     if(!kiosk/perform) { return res.send(404); }
//     kiosk/perform.remove(function(err) {
//       if(err) { return handleError(res, err); }
//       return res.send(204);
//     });
//   });
// };

// function handleError(res, err) {
//   return res.send(500, err);
// }
