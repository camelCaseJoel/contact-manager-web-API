"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DBConnection_1 = require("./DBConnection");
var Contact = /** @class */ (function () {
    function Contact() {
    }
    Contact.getAll = function (handler) {
        var conn = DBConnection_1.DBConnection.createConnection();
        conn.connect();
        conn.query('SELECT * from contacts', handler);
        conn.end();
    };
    Contact.create = function (handler, data) {
        var conn = DBConnection_1.DBConnection.createConnection();
        var sqlQ = 'INSERT INTO contacts (firstname,lastname,email) VALUES(?,?,?)';
        conn.connect();
        conn.query(sqlQ, [data.firstname, data.lastname, data.email], handler);
        conn.end();
    };
    Contact.delete = function (handler, data) {
        var conn = DBConnection_1.DBConnection.createConnection();
        var sqlQ = 'DELETE FROM contacts WHERE id = ?';
        conn.connect();
        conn.query(sqlQ, [data.id], handler);
        conn.end();
    };
    Contact.addPhone = function (handler, data) {
        var conn = DBConnection_1.DBConnection.createConnection();
        var sqlQ = 'INSERT INTO phones (contact_id,phone) VALUES(?,?)';
        conn.connect();
        conn.query(sqlQ, [data.contact_id, data.phone], handler);
        conn.end();
    };
    return Contact;
}());
exports.Contact = Contact;
