import { DBConnection } from './DBConnection';

class Contact {
    public static getContacts () {
        const conn = DBConnection.createConnection();
        conn.connect();
        conn.query('SELECT * from contacts', (error, results, fields) => {
            if (error) throw error;
            console.log( 'The solution is: ', results );
        });
        conn.end(); 
    }
    public static createContact () {

    }
    public static deleteContact () {

    }
    
}

export { Contact };