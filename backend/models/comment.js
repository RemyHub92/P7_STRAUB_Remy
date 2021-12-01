const { Datatypes} = require('sequelize');

const DB = require('../config/db.config');

const Comment = DB.define('Comment', { 
    userId: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    content: {
        type: Datatypes.TEXT,
        defaultValue: '',
        allowNull: false
    },
    createdAt: {
        type: Datatypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: Datatypes.DATE,
        allowNull: false
    }
  
});

module.exports = Comment;