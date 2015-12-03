'use strict';

var express = require('express');
var controller = require('./en4.controller');

var router = express.Router();

router.get('/city', controller.city);
router.get('/metro', controller.metro);
router.get('/local', controller.local);
router.get('/region', controller.region);

module.exports = router;