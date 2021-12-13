const Sequelize = require('sequelize');

const DB = require('../config/db.config');

const Message = DB.define('Messages', { 
    userId: {
        type: Sequelize.INTEGER,
      
    },
    content: {
        type: Sequelize.TEXT,
    
    },
    image: {
        type: Sequelize.STRING,
      
    },
    createdAt: {
        type: Sequelize.DATE,
       
    },
    updatedAt: {
        type: Sequelize.DATE,
        
    }
});

module.exports = Message;