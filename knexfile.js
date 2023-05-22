require('dotenv').config();

module.exports = {
  development: {
    client: process.env.DEV_DB_CLIENT,
    connection: {
      database: process.env.DEV_DB_NAME,
      user: process.env.DEV_DB_USER,
      password: process.env.DEV_DB_PASSWORD,
      host: process.env.DEV_DB_HOST,
    },
  },
  testing: {
    client: process.env.TES_DB_CLIENT,
    connection: {
      database: process.env.TES_DB_NAME,
      user: process.env.TES_DB_USER,
      password: process.env.TES_DB_PASSWORD,
      host: process.env.TES_DB_HOST,
    },
  },
};