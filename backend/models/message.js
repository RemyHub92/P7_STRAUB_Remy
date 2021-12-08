const Sequelize = require('sequelize');

const DB = require('../config/db.config');

const Message = DB.define('Message', { 
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: '',
        allowNull: true
    },
    createdAt: {
        type: Sequelize.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Message;