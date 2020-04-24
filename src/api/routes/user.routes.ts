//Liste de toutes les routes et de leur requirements avec celebrate

import { Router, Request, Response } from 'express';
import middlewares from '../middlewares';
import { celebrate, Joi } from 'celebrate';
import userCtrl from '../../controllers/user.controller';

const route = Router();

export default (app: Router) => {
  app.use('/user', route);

  route.get('/me', middlewares.isAuth, (req: Request, res: Response) => {
    return res.json({ user: 'me' }).status(200);
  });

  route.post(
    '/us',
    middlewares.isAuth,
    celebrate({ body: Joi.object({ name: Joi.string().required(), nb: Joi.number().integer().max(1000).required() }) }),
    userCtrl.test,
  );
};
