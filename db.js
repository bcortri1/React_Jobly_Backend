"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri,
    // getDatabaseConfig 
    } = require("./config");

let db;

if (process.env.NODE_ENV === "production") {
    //FOR LOCAL SETUP ONLY
    //   db = new Client({
    //     database: getDatabaseUri(),
    //     ...getDatabaseConfig(),
    //     ssl: {
    //       rejectUnauthorized: false
    //     }
    //   });
    // } else {
    //   db = new Client({
    //     database: getDatabaseUri(),
    //     ...getDatabaseConfig(),
    //   });
    // }

    //DEPLOYED SETUP
    db = new Client({
        connectionString: getDatabaseUri(),
        ssl: {
            rejectUnauthorized: false
        }
    });
} else {
    db = new Client({
        connectionString: getDatabaseUri()
    });
}

db.connect();

module.exports = db;