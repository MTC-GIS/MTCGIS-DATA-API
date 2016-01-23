'use strict';

var _ = require('lodash');
var sql = require('mssql');
var config = require('./../../config/environment');

// Get list of t6s
exports.operator = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT Year, System, TotalAssetCost, AgedAssetCost, PAOUL, Share_TotAssets, Share_AgedAssets, Source  FROM VitalSigns.T19_PAOUL_Operator WHERE System is not null ORDER BY PAOUL DESC';
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

