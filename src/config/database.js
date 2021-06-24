require('dotenv').config

module.exports = {
    APP_NAME: process.env.APP_NAME || 'cms',
    DB_NAME: process.env.NAME || 'cms',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '',
    DB_PORT: parseInt(process.env.DB_PORT) || 3306,
    DB_HOST: process.env.DB_HOST || '127.0.0.1',
}