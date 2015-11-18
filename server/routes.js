/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/geo', require('./api/geo'));
  app.use('/api/t3', require('./api/t3'));
  app.use('/api/t13', require('./api/t13'));
  app.use('/api/t12', require('./api/t12'));
  app.use('/api/t11', require('./api/t11'));
  app.use('/api/t1', require('./api/t1'));
  app.use('/api/t15', require('./api/t15'));
  app.use('/api/t14', require('./api/t14'));
  app.use('/api/t9', require('./api/t9'));
  app.use('/api/t8', require('./api/t8'));
  app.use('/api/t7', require('./api/t7'));
  app.use('/api/t6', require('./api/t6'));
  app.use('/api/things', require('./api/thing'));
  
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
    });
};
