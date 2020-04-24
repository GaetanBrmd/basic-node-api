import express from 'express';
import config from './config';

async function startServer() {
  const app = express();

  //On va lancement le chargement de tous les loaders
  await require('./loaders').default({ expressApp: app });

  app.listen(config.port, (err) => {
    if (err) {
      return console.error(err);
    }
    return console.log(`
          ################################################
               🛡️  Server listening on port: ${config.port} 🛡️ 
          ################################################
          `);
  });
}

startServer();
