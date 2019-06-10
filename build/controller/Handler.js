"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var Handler = /** @class */ (function () {
    function Handler() {
    }
    // check request
    Handler.match = function (req, res, route) {
        console.log('req method: ' + req.method);
        console.log('req url: ' + req.url);
        var pathMatched = (req.url == route.path);
        var verbMatched = (req.method == route.verb);
        console.log("pathmatched: " + pathMatched);
        console.log("verbmatched: " + verbMatched);
        console.log('---------------------------');
        if (pathMatched && verbMatched)
            return true;
        return false;
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
    Handler.getContacts = function (req, res) {
    };
    Handler.createContact = function (req, res) {
    };
    Handler.updateContact = function (req, res) {
    };
    Handler.deleteContact = function (req, res) {
    };
    return Handler;
}());
exports.handler = Handler;
