"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utils_1 = require("./Utils");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.handleRequest = function (req, res) {
        Utils_1.u.match(req, {
            verb: 'GET',
            path: '/',
            handler: this.getUI
        });
    };
    Controller.prototype.getUI = function () {
    };
    Controller.prototype.getContacts = function () {
    };
    ;
    return Controller;
}());
exports.Controller = Controller;
