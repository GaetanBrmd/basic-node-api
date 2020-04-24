import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from '../api';

export default async ({ app }: { app: express.Application }) => {
  //Status
  app.get('/status', (req, res) => {
    res.status(200).end();
  });

  app.use(cors());

  app.use(bodyParser.json());

  app.use('/api', routes());

  //Error handlers
  app.use((err, req, res, next) => {
    /**
     * Handle 401 thrown by express-jwt library
     */
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });

  console.log('Express loaded 🔥 !');
};
