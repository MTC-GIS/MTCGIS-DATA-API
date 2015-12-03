'use strict';

var express = require('express');
var controller = require('./ec7.controller');

var router = express.Router();

router.get('/city', controller.city);
router.get('/county', controller.county);
router.get('/metro', controller.metro);
router.get('/region', controller.region);
router.get('/tract/:year', controller.tract);

module.exports = router;