'use strict';

var express = require('express');
var controller = require('./lu1.controller');

var router = express.Router();
router.get('/city', controller.city);
router.get('/county', controller.county);
router.get('/countyshares', controller.countyshares);
router.get('/metro', controller.metro);
router.get('/pda', controller.pda);
router.get('/pdaallyears', controller.pdaallyears);
router.get('/placetype', controller.placetype);
router.get('/region', controller.region);
router.get('/regionshares', controller.regionshares);
router.get('/tract', controller.tract);
router.get('/tractallyears', controller.tractallyears);

module.exports = router;