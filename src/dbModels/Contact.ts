import { DBConnection } from './DBConnection';

class Contact {
    public static getAll ( handler ) {
        const conn = DBConnection.createConnection();
        const sqlQ = 'SELECT * from contacts';
        conn.connect();
        conn.query( sqlQ, handler );
        conn.end(); 
    }
    public static create ( handler, data ) {
        const conn = DBConnection.createConnection();
        const sqlQ = 'INSERT INTO contacts (firstname,lastname,email) VALUES(?,?,?)';
        conn.connect();
        conn.query( sqlQ,[data.firstname, data.lastname, data.email], handler );
        conn.end();
    }
    public static delete ( handler, data ) {
        const conn = DBConnection.createConnection();
        const sqlQ = 'DELETE FROM contacts WHERE id = ?';
        conn.connect();
        conn.query( sqlQ,[data.id], handler );
        conn.end();
    }
    public static addPhone ( handler, data ) {
        const conn = DBConnection.createConnection();
        const sqlQ = 'INSERT INTO phones (contact_id,phone) VALUES(?,?)';
        conn.connect();
        conn.query( sqlQ,[data.contact_id, data.phone], handler );
        conn.end();
    }
    public static getPhones ( handler, data ) {
        const conn = DBConnection.createConnection();
        const sqlQ = 'SELECT * FROM phones WHERE contact_id = ?';
        conn.connect();
        conn.query( sqlQ,[data.contact_id], handler );
        conn.end();
    }
    
}

export { Contact };