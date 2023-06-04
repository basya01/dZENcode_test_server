import { Sequelize } from 'sequelize';
import config from './config.js';

const sequelize = new Sequelize(
  config.production.database,
  config.production.username,
  config.production.password,
  {
    host: config.production.host,
    dialect: config.production.dialect,
    port: config.production.port,
  }
);

(async () => {
  await sequelize.sync();
})();

export default sequelize;
