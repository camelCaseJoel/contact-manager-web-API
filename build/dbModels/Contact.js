"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DBConnection_1 = require("./DBConnection");
var Contact = /** @class */ (function () {
    function Contact() {
    }
    Contact.getContacts = function () {
        var conn = DBConnection_1.DBConnection.createConnection();
        conn.connect();
        conn.query('SELECT * from contacts', function (error, results, fields) {
            if (error)
                throw error;
            console.log('The solution is: ', results);
        });
        conn.end();
    };
    Contact.createContact = function () {
    };
    Contact.deleteContact = function () {
    };
    return Contact;
}());
exports.Contact = Contact;
