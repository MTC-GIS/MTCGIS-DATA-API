'use strict';

var _ = require('lodash');
var sql = require('mssql');
var config = require('./../../config/environment');

// Get list of t6s
exports.county = function(req, res) {
    var request = new sql.Request(config.mssql.connection);
    var query = 'SELECT Res_Geo_Short, Residence_Geo, Work_Geo_Short, Workplace_Geo, Year, Total,[Drove alone], [2-person carpool],[3-person carpool], [4-person carpool], [5-or-6-person carpool], [7-or-more-person carpool], Bus, [Streetcar or trolley ], Subway, Railroad, Ferry, Bicycle,  Walked, Taxi, Motorcycle, Other [Worked at home], [All Carpool ], [All Transit ] FROM  VitalSigns.T5_CommuteFlow_County  ORDER BY Res_Geo_Short, Work_Geo_Short';
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
