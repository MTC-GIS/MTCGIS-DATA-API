'use strict';

var express = require('express');
var controller = require('./en10.controller');

var router = express.Router();

router.get('/region', controller.region);

module.exports = router;