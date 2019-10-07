import mongooseLoader from './mongoose';
import expressLoader from './express';

async function initializeApp ({ expressApp }) {
    const mongooseConnection = await mongooseLoader();
    console.log('MongoDB initialized');

    await expressLoader({app: expressApp});
    console.log('Express Intialized');

    return expressApp;
}

export default initializeApp;