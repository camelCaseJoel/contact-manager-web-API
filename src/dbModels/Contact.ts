import { DBConnection } from './DBConnection';

class Contact {
    public static getAll ( handler ) {
        const conn = DBConnection.createConnection();
        conn.connect();
        conn.query( 'SELECT * from contacts', handler );
        conn.end(); 
    }
    public static create ( handler, data ) {
        const conn = DBConnection.createConnection();
        const sqlQ = 'INSERT INTO contacts (firstname,lastname,email) VALUES(?,?,?)';
        conn.connect();
        conn.query( sqlQ,[data.firstname, data.lastname, data.email], handler );
        conn.end();
    }
    public static delete ( handler ) {
        // const conn = DBConnection.createConnection();
        // conn.connect();
        // conn.query( 'SELECT * from contacts', handler );
        // conn.end(); 
    }
    
}

export { Contact };