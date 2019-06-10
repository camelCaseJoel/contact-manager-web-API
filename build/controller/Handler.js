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
        fs.readFile('/../src/client/index.html', function (e, content) {
            if (e) {
                console.log('ERRORRRRR !!!!!');
                console.log(e);
            }
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf-8');
            }
        });
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
