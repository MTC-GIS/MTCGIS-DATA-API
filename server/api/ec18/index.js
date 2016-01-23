'use strict';

var express = require('express');
var controller = require('./ec18.controller');

var router = express.Router();

router.get('/metro', controller.metroport);
router.get('/oakland', controller.oakland);

module.exports = router;