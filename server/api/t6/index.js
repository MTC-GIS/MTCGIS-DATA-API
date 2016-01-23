'use strict';

var express = require('express');
var controller = require('./t6.controller');

var router = express.Router();

router.get('/county', controller.county);
router.get('/gatewayCounty', controller.gateway);
router.get('/haloCounty', controller.halo);

module.exports = router;