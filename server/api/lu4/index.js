'use strict';

var express = require('express');
var controller = require('./lu4.controller');

var router = express.Router();

router.get('/city', controller.city);
router.get('/county', controller.county);
router.get('/placetype2', controller.placetype2);
router.get('/placetype', controller.placetype);
router.get('/region', controller.region);

module.exports = router;