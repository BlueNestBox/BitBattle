'use strict';

var mongoose = require('mongoose')
  , Schema = mongoose.Schema
  , ObjectId = Schema.Types.ObjectId

var KioskConfirmSchema = new Schema({
  email: {type: String, required: true},
  challenge:  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'things',
    required: true
  }, //Schema.Types.ObjectId,
  startTime: {type: Date, required: true},
  endTime: {type: Date,  required: true}, //2 minutes after creation
  upvotes: {type: Number, default: 0},
  downvotes: {type: Number, default: 0},
  won: {type: Boolean, default: false},
  lost: {type: Boolean, default: false}
});

module.exports = mongoose.model('KioskConfirm', KioskConfirmSchema);
