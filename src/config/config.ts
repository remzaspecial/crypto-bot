// eslint-disable-next-line
const dotenv = require('dotenv');
dotenv.config();

export default {
  PORT: Number(process.env.PORT),
  TELEGRAM_BOT_TOKEN: String(process.env.TELEGRAM_BOT_TOKEN),
  TELEGRAM_CHAT_ID: Number(process.env.TELEGRAM_CHAT_ID),
  COINMARKETCAP_API_KEY: String(process.env.COINMARKETCAP_API_KEY),
  DB: {
    DATABASE: String(process.env.DATABASE),
    USERNAME: String(process.env.USERNAME),
    PASSWORD: String(process.env.PASSWORD),
    HOST: String(process.env.HOST),
    PORT: String(process.env.PORT),
  },
};
