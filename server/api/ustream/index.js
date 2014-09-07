'use strict';

var express = require('express');
var controller = require('./ustream.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();

router.get('/', auth.hasRole('kiosk'), controller.index);
// router.post('/', controller.error);
// router.get('/', controller.index);

module.exports = router;
