class Config {
    // node app
    public host: string = 'localhost';
    public port: number = 3000;
    
    // database
    public dbHost: string = 'localhost';
    public dbName: string = 'contacts_app';
    public dbUser: string = 'joel';
    public dbPass: string = 'password';
}

export { Config };