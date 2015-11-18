'use strict';

var express = require('express');
var controller = require('./t9.controller');

var router = express.Router();

router.get('/corridor', controller.corridor);
router.get('/region', controller.region);

module.exports = router;