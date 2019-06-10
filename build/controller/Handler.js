"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home</h1><ul><li>1</li><li>2</li><li>3</li></ul>', 'utf-8');
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
