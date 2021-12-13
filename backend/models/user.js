const Sequelize = require('Sequelize');

const DB = require('../config/db.config');

const User = DB.define('Users', {
    firstname: {
        type: Sequelize.STRING,
    },
    lastname: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
       
    },
    password: {
        type: Sequelize.STRING,
      
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
    },
    picture: {
        type: Sequelize.STRING,
   
    },
    createdAt: {
        type: Sequelize.DATE,
     
    },
    updatedAt: {
        type: Sequelize.DATE,
        
    }
}, {
    tableName: 'users'
});

module.exports = User;