
module.exports = {
  "development": {
    "username": process.env.DEV_DATABASE_USERNAME,
    "password": process.env.DEV_DATABASE_PASSWORD,
    "database": process.env.DEV_DATABASE_NAME,
    "host": process.env.DEV_DATABASE_HOST,
    "port": process.env.DEV_DATABASE_PORT,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.TEST_DATABASE_USERNAME,
    "password": process.env.TEST_DATABASE_PASSWORD,
    "database": process.env.TEST_DATABASE_NAME,
    "host": process.env.TEST_DATABASE_HOST,
    "port": process.env.TEST_DATABASE_PORT,
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "host": process.env.DATABASE_HOST,
    "port": process.env.DATABASE_PORT,
    "dialect": "postgres"
  }
};
