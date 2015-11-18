/**
 * Express configuration
 */

'use strict';

var express = require('express');
var favicon = require('serve-favicon');
var morgan = require('morgan');
var compression = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var path = require('path');
var config = require('./environment');

// Enables CORS
var enableCORS = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, *');

    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
        res.send(200);
    } else {
        next();
    }
};


module.exports = function(app) {
    var env = app.get('env');

    app.set('views', config.root + '/server/views');
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(compression());
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());
    app.use(cookieParser());

    if ('production' === env) {
        app.use(enableCORS);
        //app.use(favicon(path.join(config.root, 'current', 'favicon.ico')));
        app.use(express.static(path.join(config.root, 'current')));
        app.set('appPath', path.join(config.root, 'current'));
        app.use(morgan('dev'));
    }

    if ('development' === env || 'test' === env) {
        app.use(require('connect-livereload')());
        app.use(express.static(path.join(config.root, '.tmp')));
        app.use(express.static(path.join(config.root, 'client')));
        app.set('appPath', path.join(config.root, 'client'));
        app.use(morgan('dev'));
        app.use(errorHandler()); // Error handler - has to be last
    }
};
