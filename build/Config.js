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
        this.dbUser = 'root';
        this.dbPass = 'parapaderapa1982';
    }
    return Config;
}());
exports.Config = Config;
