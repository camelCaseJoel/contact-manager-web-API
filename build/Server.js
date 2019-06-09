"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Controller_1 = require("./controller/Controller");
var http = require("http");
var Server = /** @class */ (function () {
    function Server(config) {
        this.config = config;
        this.port = config.port;
        this.host = config.host;
        this.controller = new Controller_1.Controller;
    }
    Server.prototype.start = function () {
        http.createServer(this.controller.handleRequest).listen(this.port);
    };
    return Server;
}());
exports.Server = Server;
