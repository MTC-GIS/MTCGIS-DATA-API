'use strict';

var express = require('express');
var controller = require('./en7.controller');

var router = express.Router();

router.get('/local', controller.local);
router.get('/city', controller.city);
router.get('/region', controller.region);

module.exports = router;