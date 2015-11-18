'use strict';
var mssql = require('mssql');

var config = {
    user: process.env.SQL_USER,
    password: process.env.SQL_PWD,
    server: process.env.SERVER, // You can use 'localhost\\instance' to connect to named instance
    database: process.env.DATABASE
};

var options = {
    table: '[sessions]' // Table to use as session store. Default: [sessions]
};

var connection = new mssql.Connection(config, function(err) {
    if (err) {

        console.log(err);
        console.log('is the error');
    }

});

// Production specific configuration
// =================================
module.exports = {
    // Server IP
    ip: process.env.OPENSHIFT_NODEJS_IP ||
        process.env.IP ||
        undefined,

    // Server port
    port: process.env.OPENSHIFT_NODEJS_PORT ||
        process.env.PORT ||
        8080,

  
    mssql: {
        config: config,
        options: options,
        connection: connection
    },
    sendgrid: {
        user: process.env.SENDGRID_USER,
        access: process.env.SENDGRD_PWD
            //seedDB: true
    }
};
