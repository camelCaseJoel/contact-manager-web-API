import { Config } from './Config';
import { Controller } from './controller/Controller';
import * as http from 'http';

class Server {
    private port: number;
    private host: string;
    private config: Config;
    private controller: Controller;

    constructor ( config: Config ) {
        this.config = config;
        this.port = config.port;
        this.host = config.host;
        this.controller = new Controller;
    }

    public start (): void {
        http.createServer( this.controller.handleRequest ).listen( this.port );
    }
}

export { Server };

