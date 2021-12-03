const { Sequelize } = require('sequelize');
require('dotenv').config({path:'./config/.env'})

let sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        logging: false
    }
);

module.exports = sequelize;