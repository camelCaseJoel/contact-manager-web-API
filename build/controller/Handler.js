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
        var handler = function (error, results, fields) {
            if (error)
                throw error;
            console.log('The result is: ', results);
            var stringResult = JSON.stringify(results);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(stringResult, 'utf-8');
        };
        Contact_1.Contact.getAll(handler);
    };
    Handler.createContact = function (req, res) {
        var handler = function (error, results, fields) {
            if (error)
                throw error;
            console.log('The result is: ', results);
            var stringResult = JSON.stringify(results);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(stringResult, 'utf-8');
        };
        var postBody = '';
        req.on('data', function (chunk) {
            postBody += chunk.toString();
        });
        req.on('end', function () {
            var dataObject = JSON.parse(postBody);
            Contact_1.Contact.create(handler, dataObject);
        });
    };
    Handler.deleteContact = function (req, res) {
        var handler = function (error, results, fields) {
            if (error)
                throw error;
            console.log('The result is: ', results);
            var stringResult = JSON.stringify(results);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(stringResult, 'utf-8');
        };
        var postBody = '';
        req.on('data', function (chunk) {
            postBody += chunk.toString();
        });
        req.on('end', function () {
            var dataObject = JSON.parse(postBody);
            Contact_1.Contact.delete(handler, dataObject);
        });
    };
    Handler.addPhone = function (req, res) {
        var handler = function (error, results, fields) {
            if (error)
                throw error;
            console.log('The result is: ', results);
            var stringResult = JSON.stringify(results);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(stringResult, 'utf-8');
        };
        var postBody = '';
        req.on('data', function (chunk) {
            postBody += chunk.toString();
        });
        req.on('end', function () {
            var dataObject = JSON.parse(postBody);
            Contact_1.Contact.addPhone(handler, dataObject);
        });
    };
    Handler.getPhones = function (req, res) {
        var handler = function (error, results, fields) {
            if (error)
                throw error;
            console.log('The result is: ', results);
            var stringResult = JSON.stringify(results);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(stringResult, 'utf-8');
        };
        var postBody = '';
        req.on('data', function (chunk) {
            postBody += chunk.toString();
        });
        req.on('end', function () {
            var dataObject = JSON.parse(postBody);
            Contact_1.Contact.getPhones(handler, dataObject);
        });
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
