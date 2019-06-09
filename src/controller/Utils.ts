class Utils {
    // check request
    static match ( req, route ) {
        const urlMatched: boolean  = ( req.url == url );
        const verbMatched: boolean = ( req.verb == url); 
        
        if ( urlMatched && verbMatched ) func();
    }
}

export { Utils as u };