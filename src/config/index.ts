import dotenv from 'dotenv';

dotenv.config();

export const config = {
    port: process.env.PORT || 3000,
    portDatabase: process.env.DATABASE_PORT || '3306',
    dialect: process.env.DIALECT || 'mysql',
    databaseURL: process.env.DATABASE_URI || 'localhost',
    databaseUser: process.env.DATABASE_USER || 'root',
    databasePassword: process.env.DATABASE_PASS || 'admin',
    databaseName: process.env.DATABASE_NAME || 'casaguatemala'
}