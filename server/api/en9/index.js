'use strict';

var express = require('express');
var controller = require('./en9.controller');

var router = express.Router();

router.get('/local', controller.local);
router.get('/region', controller.region);

module.exports = router;