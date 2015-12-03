'use strict';

var express = require('express');
var controller = require('./ec19.controller');

var router = express.Router();

router.get('/metro', controller.metro);
router.get('/ports', controller.ports);
router.get('/region', controller.region);

module.exports = router;