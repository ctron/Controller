const config = require('../../../config')

module.exports = {
  development: {
    dialect: 'postgres',
    logging: false,
    operatorsAliases: false,
    transactionType: 'IMMEDIATE',
    pool: {
      maxactive: 5,
      max: 5,
      min: 1,
      idle: 20000
    },
    database: 'iofog_controller_dev',
    username: config.get('Database:Username') || process.env.DB_USERNAME,
    password: config.get('Database:Password') || process.env.DB_PASSWORD,
    host: config.get('Database:Host') || process.env.DB_HOST || 'localhost',
    port: config.get('Database:Port') || process.env.DB_PORT || 5432
  },
  test: {
    dialect: 'postgres',
    logging: false,
    operatorsAliases: false,
    transactionType: 'IMMEDIATE',
    pool: {
      maxactive: 5,
      max: 5,
      min: 1,
      idle: 20000
    },
    database: 'iofog_controller_test',
    username: config.get('Database:Username') || process.env.DB_USERNAME,
    password: config.get('Database:Password') || process.env.DB_PASSWORD,
    host: config.get('Database:Host') || process.env.DB_HOST || 'localhost',
    port: config.get('Database:Port') || process.env.DB_PORT || 5432
  },
  production: {
    dialect: 'postgres',
    logging: false,
    operatorsAliases: false,
    transactionType: 'IMMEDIATE',
    pool: {
      maxactive: 5,
      max: 5,
      min: 1,
      idle: 20000
    },
    database: 'iofog_controller',
    username: config.get('Database:Username') || process.env.DB_USERNAME,
    password: config.get('Database:Password') || process.env.DB_PASSWORD,
    host: config.get('Database:Host') || process.env.DB_HOST || 'localhost',
    port: config.get('Database:Port') || process.env.DB_PORT || 5432
  }
}
