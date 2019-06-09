import { Config } from './Config';
import * as http from 'http';

class Server {
    config: Config;

    constructor ( config: Config ) {
        this.config = config;
    }

    start () {
        const server = http.createServer(( req, res ) => {
            res.writeHead(200, { "Content-type": "text/plain" });
            res.end("<ul><li>una...</li><li>cosa...</li><li>loca...</li></ul>");
        });
        server.listen( this.config.port, () => {
            console.log( 'running at port: ' + this.config.port );
        });

    }
}

export { Server };

