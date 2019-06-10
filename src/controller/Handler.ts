import { Route } from '../types';
import * as fs from 'fs';

class Handler {
    // check request
    static match ( req: any, res: any, route: Route ) {
        console.log( 'req method: ' + req.method );
        console.log( 'req url: ' + req.url );

        const pathMatched: boolean = ( req.url == route.path );
        const verbMatched: boolean = ( req.method == route.verb );

        console.log(`pathmatched: ${pathMatched}`);
        console.log(`verbmatched: ${verbMatched}`);
        console.log('---------------------------');
        
        if ( pathMatched && verbMatched ) return true;
        return false;
    }

    static getUI ( req: any, res: any ) {
        fs.readFile('/../src/client/index.html', (e, content) => {
            if (e) {
                console.log('ERRORRRRR !!!!!');
                console.log( e );
            }else{
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content, 'utf-8');
            }
        });

    }
    static getContacts ( req: any, res: any ) {

    }
    static createContact ( req: any, res: any ) {

    }
    static updateContact ( req: any, res: any ) {

    }
    static deleteContact ( req: any, res: any ) {

    }
}

export { Handler as handler };