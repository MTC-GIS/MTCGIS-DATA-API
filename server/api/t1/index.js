'use strict';

var express = require('express');
var controller = require('./t1.controller');

var router = express.Router();

router.get('/countydetail', controller.countydetail);
router.get('/countysimple', controller.countysimple);
router.get('/metro', controller.metro);
router.get('/regiondetail', controller.regiondetail);
router.get('/regionsimple', controller.regionsimple);

module.exports = router;