"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var Server = /** @class */ (function () {
    function Server(config) {
        this.config = config;
    }
    Server.prototype.start = function () {
        var _this = this;
        var server = http.createServer(function (req, res) {
            res.writeHead(200, { "Content-type": "text/plain" });
            res.end("<ul><li>una...</li><li>cosa...</li><li>loca...</li></ul>");
        });
        server.listen(this.config.port, function () {
            console.log('running at port: ' + _this.config.port);
        });
    };
    return Server;
}());
exports.Server = Server;
