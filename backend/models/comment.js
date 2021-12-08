const Sequelize = require('sequelize');

const DB = require('../config/db.config');

const Comment = DB.define('Comment', { 
    userId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    messageId: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
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

module.exports = Comment;