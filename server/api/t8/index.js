'use strict';

var express = require('express');
var controller = require('./t8.controller');

var router = express.Router();

router.get('/county', controller.county);
router.get('/region', controller.region);


module.exports = router;