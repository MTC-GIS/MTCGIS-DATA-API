'use strict';

var express = require('express');
var controller = require('./t5.controller');

var router = express.Router();

router.get('/flows', controller.county);

module.exports = router;