'use strict';

var _ = require('lodash');
var sql = require('mssql');
var config = require('./../../config/environment');

// Get list of t6s
exports.operator = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VitalSigns].[T19_PAOUL_Operator]';
    request.query(query, function(err, data) {
        if (err) {
            console.log(err);
            res.write(500, {
                "Content-Type": "text/plain"
            });
            res.write("Problem retrieving data" + err);
            return;
        }

        res.json(data);

    });
};

