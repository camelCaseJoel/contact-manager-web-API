"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
        // node app
        this.host = 'localhost';
        this.port = 3000;
        // database
        this.dbHost = 'localhost';
        this.dbPort = 3636;
        this.dbName = 'contact_manager';
        this.dbUser = 'joel';
        this.dbPass = 'password';
    }
    return Config;
}());
exports.Config = Config;
