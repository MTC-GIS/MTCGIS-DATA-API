'use strict';

var express = require('express');
var controller = require('./t3.controller');

var router = express.Router();

router.get('/county', controller.county);
router.get('/metro', controller.metro);
router.get('/region', controller.region);

module.exports = router;