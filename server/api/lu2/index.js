'use strict';

var express = require('express');
var controller = require('./lu2.controller');

var router = express.Router();

router.get('/county', controller.county);
router.get('/metro', controller.metro);
router.get('/region', controller.region);
router.get('/subcounty', controller.subcounty);

module.exports = router;