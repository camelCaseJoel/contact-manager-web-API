import { Server } from './Server';
import { Config } from './Config';

class Init {
    static start (): void {
        const config: Config = new Config();
        const server: Server = new Server( config );
        
        server.start();
    }
}

// start wep API
Init.start();