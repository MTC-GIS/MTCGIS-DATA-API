'use strict';

var express = require('express');
var controller = require('./ec1.controller');

var router = express.Router();

router.get('/county', controller.county);
router.get('/countylq', controller.countylq);
router.get('/metro', controller.metro);
router.get('/regionlq', controller.regionlq);
router.get('/region', controller.region);

module.exports = router;