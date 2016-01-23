'use strict';

var express = require('express');
var controller = require('./t18.controller');

var router = express.Router();

router.get('/county', controller.county);
router.get('/metros', controller.metro);
router.get('/region', controller.region);


module.exports = router;