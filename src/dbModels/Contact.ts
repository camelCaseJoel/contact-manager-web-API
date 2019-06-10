import { DBConnection } from './DBConnection';

class Contact {
    public static getContacts ( handler ) {
        const conn = DBConnection.createConnection();
        conn.connect();
        conn.query( 'SELECT * from contacts', handler );
        conn.end(); 
    }
    public static createContact () {

    }
    public static deleteContact () {

    }
    
}

export { Contact };