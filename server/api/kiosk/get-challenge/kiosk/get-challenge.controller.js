'use strict';

var _ = require('lodash');
var KioskConfirm = require('../../confirm/kiosk/confirm.model');
var Challenge = require('../../../thing/thing.model');

// Get list of kiosk/get-challenges
exports.index = function(req, res) {
  // KioskConfirm.find({"_id": new require('mongoose').Schema.Types.ObjectId(req.body.challenge)}, function(err, challenge){
  if(!req.body.challenge){
    res.send(500)
    return
  }
  KioskConfirm.findById(req.body.challenge, function(err, confirm){
    console.log(err)
    console.log(confirm)
    Challenge.findById(confirm.challenge, function(err, challenge){
      console.log(challenge)
      res.send({challenge: challenge, confirm: confirm})
    })
    // res.send(challenge)
  })
  // KioskGetChallenge.find(function (err, kiosk/get-challenges) {
  //   if(err) { return handleError(res, err); }
  //   return res.json(200, kiosk/get-challenges);
  // });
};

// Get a single kiosk/get-challenge
// exports.show = function(req, res) {
//   KioskGetChallenge.findById(req.params.id, function (err, kiosk/get-challenge) {
//     if(err) { return handleError(res, err); }
//     if(!kiosk/get-challenge) { return res.send(404); }
//     return res.json(kiosk/get-challenge);
//   });
// };

// // Creates a new kiosk/get-challenge in the DB.
// exports.create = function(req, res) {
//   KioskGetChallenge.create(req.body, function(err, kiosk/get-challenge) {
//     if(err) { return handleError(res, err); }
//     return res.json(201, kiosk/get-challenge);
//   });
// };

// // Updates an existing kiosk/get-challenge in the DB.
// exports.update = function(req, res) {
//   if(req.body._id) { delete req.body._id; }
//   KioskGetChallenge.findById(req.params.id, function (err, kiosk/get-challenge) {
//     if (err) { return handleError(res, err); }
//     if(!kiosk/get-challenge) { return res.send(404); }
//     var updated = _.merge(kiosk/get-challenge, req.body);
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//       return res.json(200, kiosk/get-challenge);
//     });
//   });
// };

// // Deletes a kiosk/get-challenge from the DB.
// exports.destroy = function(req, res) {
//   KioskGetChallenge.findById(req.params.id, function (err, kiosk/get-challenge) {
//     if(err) { return handleError(res, err); }
//     if(!kiosk/get-challenge) { return res.send(404); }
//     kiosk/get-challenge.remove(function(err) {
//       if(err) { return handleError(res, err); }
//       return res.send(204);
//     });
//   });
// };

function handleError(res, err) {
  return res.send(500, err);
}
