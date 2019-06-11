import { Route } from '../types';
import { Contact } from '../dbModels/Contact';
import * as fs from 'fs';
import * as parse from 'querystring';

class Handler {
    // check request
    static match ( req: any, res: any, route: Route ) {
        const pathMatched: boolean = ( req.url == route.path );
        const verbMatched: boolean = ( req.method == route.verb );
        
        if ( pathMatched && verbMatched ) return true;
        return false;
    }

    static getContacts ( req: any, res: any ) {
        const handler = (error, results, fields) => {
            if (error) throw error;
            console.log( 'The result is: ', results );

            const stringResult = JSON.stringify( results );

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(stringResult, 'utf-8');
        };

        Contact.getAll( handler );
    }

    static createContact ( req: any, res: any ) {
        const handler = (error, results, fields) => {
            if (error) throw error;
            console.log( 'The result is: ', results );

            const stringResult = JSON.stringify( results );

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(stringResult, 'utf-8')
            
        };

        let postBody = '';
        req.on('data', chunk => {
            postBody += chunk.toString();
        });
        req.on('end', () => {
            let dataObject = JSON.parse( postBody );

            Contact.create( handler, dataObject );

        });

        
    }

    static deleteContact ( req: any, res: any ) {
        const handler = (error, results, fields) => {
            if (error) throw error;
            console.log( 'The result is: ', results );

            const stringResult = JSON.stringify( results );

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(stringResult, 'utf-8')
            
        };

        let postBody = '';
        req.on('data', chunk => {
            postBody += chunk.toString();
        });
        req.on('end', () => {
            let dataObject = JSON.parse( postBody );

            Contact.delete( handler, dataObject );

        });
    }


    static deletePhone ( req: any, res: any ) {
        const handler = (error, results, fields) => {
            if (error) throw error;
            console.log( 'The result is: ', results );

            const stringResult = JSON.stringify( results );

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(stringResult, 'utf-8')
            
        };

        let postBody = '';
        req.on('data', chunk => {
            postBody += chunk.toString();
        });
        req.on('end', () => {
            let dataObject = JSON.parse( postBody );

            Contact.deletePhone( handler, dataObject );

        });
    }


    static addPhone ( req: any, res: any ) {
        const handler = (error, results, fields) => {
            if (error) throw error;
            console.log( 'The result is: ', results );

            const stringResult = JSON.stringify( results );

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(stringResult, 'utf-8')
            
        };

        let postBody = '';
        req.on('data', chunk => {
            postBody += chunk.toString();
        });
        req.on('end', () => {
            let dataObject = JSON.parse( postBody );

            Contact.addPhone( handler, dataObject );

        });

        
    }

    static getPhones ( req: any, res: any ) {
        const handler = (error, results, fields) => {
            if (error) throw error;
            console.log( 'The result is: ', results );

            const stringResult = JSON.stringify( results );

            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(stringResult, 'utf-8')
            
        };
        Contact.getPhones( handler );
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
    
}

export { Handler as handler };