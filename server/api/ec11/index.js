'use strict';

var express = require('express');
var controller = require('./ec11.controller');

var router = express.Router();

router.get('/county', controller.county);
router.get('/city', controller.city);
router.get('/metro', controller.metro);
router.get('/region', controller.region);
router.get('/tract', controller.tract);

module.exports = router;