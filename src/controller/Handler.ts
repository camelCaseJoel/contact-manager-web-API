import { Route } from '../types';

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
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home</h1><ul><li>1</li><li>2</li><li>3</li></ul>', 'utf-8');
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