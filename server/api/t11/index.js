'use strict';

var express = require('express');
var controller = require('./t11.controller');

var router = express.Router();

router.get('/metro', controller.metro);
router.get('/metromode', controller.metromode);
router.get('/mode', controller.mode);
router.get('/operator', controller.operator);
router.get('/operatormode', controller.operatormode);
router.get('/region', controller.region);

module.exports = router;