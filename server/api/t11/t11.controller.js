'use strict';

var _ = require('lodash');
var sql = require('mssql');
var config = require('./../../config/environment');

exports.metro = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VS2].[T11_TransitRidershipWeekday_Metro]';
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

exports.metromode = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VS2].[T11_TransitRidershipWeekday_MetroMode]';
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

exports.mode = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VS2].[T11_TransitRidershipWeekday_Mode]';
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


exports.operator = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VS2].[T11_TransitRidershipWeekday_Operator]';
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


exports.operatormode = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VS2].[T11_TransitRidershipWeekday_OperatorMode]';
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
    var query = 'SELECT * FROM [VS2].[T11_TransitRidershipWeekday_Region]';
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