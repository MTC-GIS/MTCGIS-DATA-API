'use strict';

var express = require('express');
var controller = require('./t16.controller');

var router = express.Router();

router.get('/city', controller.city);
router.get('/county', controller.county);
router.get('/region', controller.region);


module.exports = router;