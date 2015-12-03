'use strict';

var express = require('express');
var controller = require('./t17.controller');

var router = express.Router();

router.get('/caltrans', controller.caltrans);
router.get('/region', controller.region);


module.exports = router;