import { Dialect } from 'sequelize';

interface IDatabaseConfig {
  dialect: Dialect;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}

const databaseConfig: IDatabaseConfig = {
  dialect: 'mysql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306', 10),
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'crypto_tracker',
};

export default databaseConfig;
