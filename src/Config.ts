class Config {
    // node app
    public host: string = 'localhost';
    public port: number = 3000;
    
    // database
    public dbHost: string = 'localhost';
    public dbPort: number = 3636;
    public dbName: string = 'contact_manager';
    public dbUser: string = 'joel';
    public dbPass: string = 'password';
}

export { Config };