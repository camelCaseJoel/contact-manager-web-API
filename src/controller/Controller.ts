import { u } from './Utils';
import { Contact } from './../dbModels/Contact';

class Controller{
    public handleRequest (req: any, res: any): void {
        u.match( req, {
            verb: 'GET',
            path: '/',
            handler: this.getUI
        });
        

    }
    private getUI () {
        
    }
    private getContacts() {

    };
    
}

export { Controller };