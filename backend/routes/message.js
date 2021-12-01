const express = require('express');
const router = express.router();

const messageCtrl = require('../controllers/message');

router.post('/', messageCtrl.createMessage);
router.get('/', messageCtrl.getAllMessages);
router.get('/:id', messageCtrl.getOneMessage);
router.delete('/:id', messageCtrl.deleteMessage);

module.exports = router;