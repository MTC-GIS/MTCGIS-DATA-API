'use strict';

var express = require('express');
var controller = require('./ec10.controller');

var router = express.Router();

router.get('/county', controller.county);
router.get('/countyInc', controller.countyinc);
router.get('/metro', controller.metro);
router.get('/region', controller.region);
router.get('/regionInc', controller.regioninc);

module.exports = router;