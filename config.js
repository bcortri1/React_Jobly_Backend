"use strict";

/** Shared config for application; can be required many places. */

require("dotenv").config();
require("colors");

const SECRET_KEY = process.env.SECRET_KEY || "secret-dev";

const PORT = +process.env.PORT || 3001;

// Use dev database, testing database, or via env var, production database

// USED FOR LOCAL SETUP ONLY
// function getDatabaseUri() {
//     let database = (process.env.NODE_ENV === "test") 
//     ? "jobly_test": process.env.DATABASE_URL || "jobly";

//     return database;
// }

// function getDatabaseConfig(){
//     let user = process.env.PGUSER;
//     let password = process.env.PGPASSWORD;
//     let host = process.env.PGHOST;
//     return {user, password, host}
// }

function getDatabaseUri() {
    return (process.env.NODE_ENV === "test")
        ? "jobly_test"
        : process.env.DATABASE_URL || "jobly";
}

// Speed up bcrypt during tests, since the algorithm safety isn't being tested
//
// WJB: Evaluate in 2021 if this should be increased to 13 for non-test use
const BCRYPT_WORK_FACTOR = process.env.NODE_ENV === "test" ? 1 : 12;

console.log("Jobly Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("BCRYPT_WORK_FACTOR".yellow, BCRYPT_WORK_FACTOR);
console.log("Database:".yellow, getDatabaseUri());
console.log("---");

module.exports = {
    SECRET_KEY,
    PORT,
    BCRYPT_WORK_FACTOR,
    getDatabaseUri,
    //getDatabaseConfig
};
