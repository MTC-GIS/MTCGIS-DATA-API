'use strict';

var express = require('express');
var controller = require('./ec3.controller');

var router = express.Router();

router.get('/city', controller.city);
router.get('/region', controller.region);
router.get('/county', controller.county);
router.get('/metro', controller.metro);

module.exports = router;