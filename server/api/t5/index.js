'use strict';

var express = require('express');
var controller = require('./t5.controller');

var router = express.Router();

router.get('/county', controller.county);

module.exports = router;