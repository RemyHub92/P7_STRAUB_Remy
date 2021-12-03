const express = require('express');
const router = express.router();

const commentCtrl = require('../controllers/comment');

router.post('/', auth, messageCtrl.createComment);
router.get('/', auth, messageCtrl.getAllMessagesComment);
router.delete('/:id', auth, messageCtrl.deleteComment);

module.exports = router;