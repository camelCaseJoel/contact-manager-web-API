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
        
        let data: any;
        try {
            data = fs.readFileSync('./client/index.html');
        } catch (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>Error reading file</h1>', 'utf-8');
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data, 'utf-8');

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