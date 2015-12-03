'use strict';

var express = require('express');
var controller = require('./ec5.controller');

var router = express.Router();

router.get('/county', controller.county);
router.get('/metro', controller.metro);
router.get('/region', controller.region);

module.exports = router;