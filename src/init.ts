import { Server } from './Server';
import { Config } from './Config';

class Init {
    static start () {
        const config = new Config();
        const server = new Server( config.get() );
        
        server.start();
    }
}

// start wep API
Init.start();