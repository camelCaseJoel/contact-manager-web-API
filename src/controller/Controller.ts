import { handler } from './Handler';
import { Contact } from './../dbModels/Contact';
import { Phone   } from './../dbModels/Phone';


class Controller{
    public handleRequest (req: any, res: any): void {
        if (handler.match( req, res, {
            verb: 'GET',
            path: '/'
        })) handler.getUI(req, res);


        if (handler.match( req, res, {
            verb: 'GET',
            path: '/api/contact'
        })) handler.getContacts(req, res);


        if (handler.match( req, res, {
            verb: 'POST',
            path: '/api/contact'
        })) handler.createContact(req, res);


        if (handler.match( req, res, {
            verb: 'PATCH',
            path: '/api/contact'
        })) handler.updateContact(req, res);


        if (handler.match( req, res, {
            verb: 'DELETE',
            path: '/api/contact'
        })) handler.deleteContact(req, res);
        
        
        // Route didn't match
        // res.writeHead(404, { 'Content-Type': 'text/html' });
        // res.end('<h1>This route is NOT definedx</h1>');

    }

    // Handlers:
    public getUI ( req: any, res: any ) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Home</h1><p>Some info here...</p>', 'utf-8');
    }
    public getContacts( req: any, res: any ) {

    };
    public createContact( req: any, res: any ) {

    };
    public modifyContact( req: any, res: any ) {

    }
    public deleteContact( req: any, res: any ) {

    }
    public test() {
        console.log('edfdjjkcjkrxedkeidixxies');
    }
    
}

export { Controller };