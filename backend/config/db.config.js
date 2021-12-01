const { Sequelize } = require('sequelize');

let sequelize = new Sequelize(
    process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: DB_HOST,
        port: DB_PORT,
        dialect: 'mysql',
        logging: false
    }
);

module.exports = sequelize;