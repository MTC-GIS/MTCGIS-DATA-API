'use strict';

var _ = require('lodash');
var sql = require('mssql');
var config = require('./../../config/environment');

// Get list of t6s
exports.county = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT distinct [County] FROM [VitalSigns_API].[VS2].[T4_CommuteTimeEmp_County]';
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

exports.city = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT City FROM VitalSigns_API.VS2.T1_CommuteModeShareRes_City WHERE (City IS NOT NULL)';
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

function handleError(res, err) {
    return res.status(500).send(err);
}