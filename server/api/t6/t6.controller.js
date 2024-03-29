'use strict';

var _ = require('lodash');
var sql = require('mssql');
var config = require('./../../config/environment');

// Get list of t6s
exports.county = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VS2].[T6_GatewayTraffic_Facility_County]';
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


// Get list of t6s
exports.gateway = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT Gateway_County As County FROM VS2.T6_GatewayTraffic_Facility_County  GROUP BY Gateway_County ORDER BY Gateway_County';
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


// Get list of t6s
exports.halo = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT Halo_County As County FROM VS2.T6_GatewayTraffic_Facility_County GROUP BY Halo_County ORDER BY Halo_County';
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