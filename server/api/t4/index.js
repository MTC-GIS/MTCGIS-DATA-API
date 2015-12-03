'use strict';

var express = require('express');
var controller = require('./t4.controller');

var router = express.Router();

router.get('/city', controller.city);
router.get('/county', controller.county);

module.exports = router;