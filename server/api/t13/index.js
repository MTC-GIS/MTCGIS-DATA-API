'use strict';

var express = require('express');
var controller = require('./t13.controller');

var router = express.Router();

router.get('/metro', controller.metro);
router.get('/mode', controller.mode);
router.get('/region', controller.region);
router.get('/system', controller.system);

module.exports = router;