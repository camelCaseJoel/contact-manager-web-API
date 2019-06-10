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
            verb: 'DELETE',
            path: '/api/contact'
        })) handler.deleteContact(req, res);
        
        
        // Routes didn't match
        // res.writeHead(404, { 'Content-Type': 'text/html' });
        // res.end('<h1>This route is NOT definedx</h1>');

    }

    
}

export { Controller };