
const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;