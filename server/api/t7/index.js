'use strict';

var express = require('express');
var controller = require('./t7.controller');

var router = express.Router();

router.get('/metro', controller.metro);
router.get('/region', controller.region);
router.get('/corridor', controller.corridor);

module.exports = router;