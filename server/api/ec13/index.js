'use strict';

var express = require('express');
var controller = require('./ec13.controller');

var router = express.Router();

router.get('/region', controller.region);
router.get('/subregion', controller.subregion);
router.get('/metro', controller.metro);

module.exports = router;