import { Container } from 'typedi';
//import 'reflect-metadata';

export default ({ dbConnection }: { dbConnection }) => {
  try {
    Container.set('db', dbConnection);

    //Container.set('mailService',mailgun({apiKey:config.email.apiKey,mail:config.email.mail}))

    console.log('Container loaded 🔥 !');
  } catch (e) {
    console.log('🔥 Error on dependency injector loader: %o', e);
    throw e;
  }
};
