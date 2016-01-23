'use strict';

var _ = require('lodash');
var sql = require('mssql');
var config = require('./../../config/environment');

// Get list of t6s
exports.county = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = "SELECT Year, geography, deckarea, sdarea, sdshare FROM [VitalSigns].[T18_countyregion] WHERE geography not in ('Bay Area') AND Year not in (1997,2009)";
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
exports.metro = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT * FROM [VitalSigns].[T18C_MetroBridges]';
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
exports.region = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = "SELECT Year, geography, deckarea, sdarea, sdshare FROM  [VitalSigns].[T18_countyregion] WHERE (geography = N'Bay Area') AND Year not in (1997,2009)";
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
