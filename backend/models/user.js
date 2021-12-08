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
        defaultValue: '',
        validate:{
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING(64),
        is: /^[0-9a-f]{64}$/i
    },
    isAdmin: {
        type: Sequelize.BOOLEAN,
    },
    picture: {
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
}, {
    tableName: 'users'
});

module.exports = User;