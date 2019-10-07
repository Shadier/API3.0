import express from 'express';
import { config } from './config';
import initializeApp from './loaders';

async function startServer() {
    const app = express();

    await initializeApp({expressApp: app});

    app.listen(config.port, () => {
        console.log(`APP RUNNING IN PORT ${config.port}`);
    });
}

startServer();
