import { Sequelize } from 'sequelize';
import config from '../config';
import models from '../models';

export default async () => {
  const dbConnection = new Sequelize({
    database: config.database,
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false,
  });

  if (dbConnection.authenticate()) {
    for (const m of models) {
      await m.start(dbConnection);
      console.log('%s synced ♻ !', m.modelName);
    }
  } else {
    throw new Error('Database not connected 🙌 !');
  }

  console.log('Database loaded 🔥 !');
  return { dbConnection };
};
