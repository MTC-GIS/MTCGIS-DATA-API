'use strict';

var express = require('express');
var controller = require('./en1.controller');

var router = express.Router();

router.get('/metro', controller.metro);
router.get('/region', controller.region);
router.get('/sensorlocations', controller.sensorlocations);
router.get('/sensors', controller.sensors);

module.exports = router;