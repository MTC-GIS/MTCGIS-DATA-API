'use strict';

var express = require('express');
var controller = require('./en5.controller');

var router = express.Router();

router.get('/local', controller.local);
router.get('/metro', controller.metro);
router.get('/region', controller.region);


module.exports = router;