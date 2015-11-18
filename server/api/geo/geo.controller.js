'use strict';

var _ = require('lodash');
var sql = require('mssql');
var config = require('./../../config/environment');

// Get list of t6s
exports.county = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT LEFT(Residence_Geo, LEN(Residence_Geo) - 19) AS County FROM VitalSigns.T3_CommuteTime_County GROUP BY LEFT(Residence_Geo, LEN(Residence_Geo) - 19) HAVING (LEFT(Residence_Geo, LEN(Residence_Geo) -19) IS NOT NULL)';
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
    var query = 'SELECT LEFT ([Residence_Geo],LEN([Residence_Geo]) - 17) as City FROM [VitalSigns].[T3_CommuteTime_City] ORDER BY [Residence_Geo]';
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