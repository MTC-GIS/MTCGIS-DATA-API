'use strict';

var express = require('express');
var controller = require('./t19.controller');

var router = express.Router();

router.get('/operator', controller.operator);

module.exports = router;