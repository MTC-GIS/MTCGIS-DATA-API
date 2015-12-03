'use strict';

var express = require('express');
var controller = require('./en2.controller');

var router = express.Router();

router.get('/metro', controller.metro);
router.get('/region', controller.region);
router.get('/sensors', controller.sensors);
router.get('/sensorlocation', controller.sensorlocation);


module.exports = router;