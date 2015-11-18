'use strict';

var _ = require('lodash');
var sql = require('mssql');
var config = require('./../../config/environment');

exports.county = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VS2].[T3_CommuteTimeRes_County]';
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

exports.metro = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VS2].[T3_CommuteTimeRes_Metro]';
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

exports.region = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VS2].[T3_CommuteTimeRes_Region]';
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