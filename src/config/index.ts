import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    portDatabase: process.env.DATABASE_PORT || '3306',
    dialect: process.env.DIALECT || 'mysql',
    databaseURL: process.env.DATABASE_URI || 'localhost',
    databasePassword: process.env.DATABASEPASS || 'admin',
    databaseUser: process.env.DATABASEUSER || 'root',
    databaseName: process.env.DATABASENAME || 'casaguatemala'
}