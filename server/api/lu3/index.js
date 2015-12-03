'use strict';

var express = require('express');
var controller = require('./lu3.controller');

var router = express.Router();

router.get('/city', controller.city);
router.get('/county', controller.county);
router.get('/metro', controller.metro);
router.get('/placetype', controller.placetype);
router.get('/region', controller.region);

module.exports = router;