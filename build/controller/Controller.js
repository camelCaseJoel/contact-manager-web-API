"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Handler_1 = require("./Handler");
var Controller = /** @class */ (function () {
    function Controller() {
    }
    Controller.prototype.handleRequest = function (req, res) {
        if (Handler_1.handler.match(req, res, {
            verb: 'GET',
            path: '/'
        }))
            Handler_1.handler.getUI(req, res);
        if (Handler_1.handler.match(req, res, {
            verb: 'GET',
            path: '/api/contact'
        }))
            Handler_1.handler.getContacts(req, res);
        if (Handler_1.handler.match(req, res, {
            verb: 'POST',
            path: '/api/contact'
        }))
            Handler_1.handler.createContact(req, res);
        if (Handler_1.handler.match(req, res, {
            verb: 'PATCH',
            path: '/api/contact'
        }))
            Handler_1.handler.updateContact(req, res);
        if (Handler_1.handler.match(req, res, {
            verb: 'DELETE',
            path: '/api/contact'
        }))
            Handler_1.handler.deleteContact(req, res);
        // Routes didn't match
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>This route is NOT definedx</h1>');
    };
    return Controller;
}());
exports.Controller = Controller;
