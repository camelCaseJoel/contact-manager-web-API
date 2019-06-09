"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Server_1 = require("./Server");
var Config_1 = require("./Config");
var Init = /** @class */ (function () {
    function Init() {
    }
    Init.start = function () {
        var config = new Config_1.Config();
        var server = new Server_1.Server(config.get());
        server.start();
    };
    return Init;
}());
// start wep API
Init.start();
