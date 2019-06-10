import * as mysql from 'mysql';
import { Config } from './../Config'

class DBConnection {
    public static createConnection () {
        const config = new Config();
        var connection = mysql.createConnection({
            host     : config.dbHost,
            user     : config.dbUser,
            password : config.dbPass,
            database : config.dbName
        });
        return connection;
    }
}

export { DBConnection };