'use strict';

var express = require('express');
var controller = require('./t18.controller');

var router = express.Router();

router.get('/county', controller.county);
router.get('/metro', controller.metro);


module.exports = router;