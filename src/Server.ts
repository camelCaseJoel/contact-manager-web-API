import { Config } from './config';

class Server {
    config: Config;

    constructor ( config: Config ) {
        this.config = config;
    }

    start () {
        console.log('this is the configuration: ')
        console.log( this.config );
    }
}

export { Server };

