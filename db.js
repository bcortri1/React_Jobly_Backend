"use strict";
/** Database setup for jobly. */
const { Client } = require("pg");
const { getDatabaseUri, getDatabaseConfig } = require("./config");

let db;

if (process.env.NODE_ENV === "production") {
  db = new Client({
    database: getDatabaseUri(),
    ...getDatabaseConfig(),
    ssl: {
      rejectUnauthorized: false
    }
  });
} else {
  db = new Client({
    database: getDatabaseUri(),
    ...getDatabaseConfig(),
  });
}

db.connect();

module.exports = db;