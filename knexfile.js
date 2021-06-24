// Update with your config settings.

const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD, DB_PORT } = require("./src/config/database");

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: DB_NAME,
      user:     DB_USER,
      password: DB_PASSWORD,
      host:     DB_HOST,
      port:     DB_PORT,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: '0_migration_log'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: DB_NAME,
      user:     DB_USER,
      password: DB_PASSWORD,
      host:     DB_HOST,
      port:     DB_PORT,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: '0_migration_log'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: DB_NAME,
      user:     DB_USER,
      password: DB_PASSWORD,
      host:     DB_HOST,
      port:     DB_PORT,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: '0_migration_log'
    }
  }

};
