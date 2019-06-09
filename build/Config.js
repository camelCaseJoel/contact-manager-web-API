"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Config = /** @class */ (function () {
    function Config() {
    }
    Config.prototype.get = function () {
        return {
            host: 'localhost',
            port: '3000'
        };
    };
    return Config;
}());
exports.Config = Config;
