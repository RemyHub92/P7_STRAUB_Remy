const { Datatypes} = require('sequelize');

const DB = require('../config/db.config');

const Message = DB.define('Message', { 
    userId: {
        type: Datatypes.INTEGER,
        allowNull: false
    },
    title: {
        type: Datatypes.STRING,
        defaultValue: '',
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
    },
    image: {
        type: Datatypes.STRING,
        defaultValue: '',
        allowNull: true
    }
  
});

module.exports = Message;