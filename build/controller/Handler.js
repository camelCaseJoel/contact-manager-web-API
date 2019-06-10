"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contact_1 = require("../dbModels/Contact");
var fs = require("fs");
var Handler = /** @class */ (function () {
    function Handler() {
    }
    // check request
    Handler.match = function (req, res, route) {
        var pathMatched = (req.url == route.path);
        var verbMatched = (req.method == route.verb);
        if (pathMatched && verbMatched)
            return true;
        return false;
    };
    Handler.getContacts = function (req, res) {
        Contact_1.Contact.getContacts();
    };
    Handler.createContact = function (req, res) {
    };
    Handler.deleteContact = function (req, res) {
    };
    Handler.getUI = function (req, res) {
        var data;
        try {
            data = fs.readFileSync('./client/index.html');
        }
        catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Error reading file</h1>', 'utf-8');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data, 'utf-8');
    };
    return Handler;
}());
exports.handler = Handler;
