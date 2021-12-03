const { DataTypes } = require('Sequelize');

const DB = require('../config/db.config');

const User = DB.define('User', {
    userId: {
        type: Datatypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true
    },
    lastname: {
        type: Datatypes.STRING,
        defaultValue: '',
        allowNull: false
    },
    firstname: {
        type: Datatypes.STRING,
        defaultValue: '',
        allowNull: false
    },
    email: {
        type: Datatypes.STRING,
        validate:{
            isEmail: true
        }
    },
    password: {
        type: Datatypes.STRING(64),
        is: /^[0-9a-f]{64}$/i
    },
    isAdmin: {
        type: Datatypes.BOOLEAN,
    },
    picture: {
        type: Datatypes.STRING,
        defaultValue: '',
        allowNull: true
    }
});

module.exports = User;