"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Server = /** @class */ (function () {
    function Server(config) {
        this.config = config;
    }
    Server.prototype.start = function () {
        console.log('this is the configuration: ');
        console.log(this.config);
    };
    return Server;
}());
exports.Server = Server;
