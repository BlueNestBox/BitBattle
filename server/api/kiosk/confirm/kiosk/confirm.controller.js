'use strict';

var _ = require('lodash');
var KioskConfirm = require('./confirm.model');

// Get list of kiosk/confirms
exports.index = function(req, res) {
  // console.log(req.body.email)
  KioskConfirm.find(
    { email: req.body.email
    , challenge: req.body.challenge
    }
    , function (err, kioskConfirms) {
      if(err) { return handleError(res, err); }
      // return res.json(200, kioskConfirms);
      if(kioskConfirms.length > 0){
        res.send({err: 'You can only attempt this challenge once! Try a new email address', url: '/kiosk'})
      }

      KioskConfirm.create({
        email: req.body.email,
        challenge: req.body.challenge,//new require('mongoose').Schema.Types.ObjectId(req.body.challenge),
        startTime: new Date(),
        endTime: new Date(Date.now()+120000),
        upvotes: 0,
        downvotes: 0,
        won: false,
        lost: false
      }, function(err, data) {
        if(err){
          console.log(err)
          res.send(500, err)
        }else{
          res.send(data)
        }
      })

    });

};

// // Get a single kiosk/confirm
// exports.show = function(req, res) {
//   KioskConfirm.findById(req.params.id, function (err, kiosk/confirm) {
//     if(err) { return handleError(res, err); }
//     if(!kiosk/confirm) { return res.send(404); }
//     return res.json(kiosk/confirm);
//   });
// };

// // Creates a new kiosk/confirm in the DB.
// exports.create = function(req, res) {
  // KioskConfirm.create(req.body, function(err, kiosk/confirm) {
  //   if(err) { return handleError(res, err); }
  //   return res.json(201, kiosk/confirm);
  // });
// };

// // Updates an existing kiosk/confirm in the DB.
// exports.update = function(req, res) {
//   if(req.body._id) { delete req.body._id; }
//   KioskConfirm.findById(req.params.id, function (err, kiosk/confirm) {
//     if (err) { return handleError(res, err); }
//     if(!kiosk/confirm) { return res.send(404); }
//     var updated = _.merge(kiosk/confirm, req.body);
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//       return res.json(200, kiosk/confirm);
//     });
//   });
// };

// // Deletes a kiosk/confirm from the DB.
// exports.destroy = function(req, res) {
//   KioskConfirm.findById(req.params.id, function (err, kiosk/confirm) {
//     if(err) { return handleError(res, err); }
//     if(!kiosk/confirm) { return res.send(404); }
//     kiosk/confirm.remove(function(err) {
//       if(err) { return handleError(res, err); }
//       return res.send(204);
//     });
//   });
// };

// function handleError(res, err) {
//   return res.send(500, err);
// }
