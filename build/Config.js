"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
        // node app
        this.host = 'localhost';
        this.port = 3000;
        // database
        this.dbHost = 'localhost';
        this.dbName = 'contacts_app';
        this.dbUser = 'joel';
        this.dbPass = 'password';
    }
    return Config;
}());
exports.Config = Config;
