import { Sequelize } from 'sequelize';
import config from './config.js';

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: config.development.dialect,
    port: config.development.port,
  }
);

(async () => {
  await sequelize.sync();
})();

export default sequelize;
