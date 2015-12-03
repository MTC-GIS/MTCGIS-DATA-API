'use strict';

var express = require('express');
var controller = require('./ec17.controller');

var router = express.Router();

router.get('/freight', controller.freight);
router.get('/passengers', controller.passengers);
router.get('/metro', controller.metro);

module.exports = router;