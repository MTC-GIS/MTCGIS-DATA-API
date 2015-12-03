'use strict';

var express = require('express');
var controller = require('./en4_9.controller');

var router = express.Router();

router.get('/points', controller.points);

module.exports = router;