'use strict';

var express = require('express');
var controller = require('./geo.controller');

var router = express.Router();

router.get('/county', controller.county);
router.get('/city', controller.city);

module.exports = router;