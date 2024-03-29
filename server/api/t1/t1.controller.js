'use strict';

var _ = require('lodash');
var sql = require('mssql');
var config = require('./../../config/environment');

// Get list of t6s
exports.countydetail = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VS2].[T1_CommuteModeShareRes_CountyDetail]';
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

exports.countysimple = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VS2].[T1_CommuteModeShareRes_CountySimple]';
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
    var query = 'SELECT * FROM [VS2].[T1_CommuteModeShareRes_Metro]';
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


exports.regiondetail = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VS2].[T1_CommuteModeShareRes_RegionDetail]';
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


exports.regionsimple = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VS2].[T1_CommuteModeShareRes_RegionSimple]';
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
    var query = 'SELECT * FROM [VS2].[T1_CommuteModeShareRes_City]';
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

exports.tract = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VS2].[T1_CommuteModeShareRes_Tract]';
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