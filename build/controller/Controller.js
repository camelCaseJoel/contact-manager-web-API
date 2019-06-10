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
            Handler_1.handler.updteContact(req, res);
        if (Handler_1.handler.match(req, res, {
            verb: 'DELETE',
            path: '/api/contact'
        }))
            Handler_1.handler.deleteContact(req, res);
        // Route didn't match
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>This route is NOT definedx</h1>');
    };
    // Handlers:
    Controller.prototype.getUI = function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home</h1><p>Some info here...</p>', 'utf-8');
    };
    Controller.prototype.getContacts = function (req, res) {
    };
    ;
    Controller.prototype.createContact = function (req, res) {
    };
    ;
    Controller.prototype.modifyContact = function (req, res) {
    };
    Controller.prototype.deleteContact = function (req, res) {
    };
    Controller.prototype.test = function () {
        console.log('edfdjjkcjkrxedkeidixxies');
    };
    return Controller;
}());
exports.Controller = Controller;
