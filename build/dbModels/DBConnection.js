"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var Config_1 = require("./../Config");
var DBConnection = /** @class */ (function () {
    function DBConnection() {
    }
    DBConnection.createConnection = function () {
        var config = new Config_1.Config();
        var connection = mysql.createConnection({
            host: config.dbHost,
            user: config.dbUser,
            password: config.dbPass,
            database: config.dbName
        });
        return connection;
    };
    return DBConnection;
}());
exports.DBConnection = DBConnection;
