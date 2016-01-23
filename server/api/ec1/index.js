'use strict';

var express = require('express');
var controller = require('./ec1.controller');

var router = express.Router();

router.get('/county', controller.county);
router.get('/LQ/county', controller.countylq);
router.get('/metro', controller.metro);
router.get('/LQ/region', controller.regionlq);
router.get('/region', controller.region);

module.exports = router;