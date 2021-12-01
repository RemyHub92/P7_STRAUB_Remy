const express = require('express');
const router = express.router();

const commentCtrl = require('../controllers/comment');

router.post('/', messageCtrl.createComment);
router.get('/', messageCtrl.getAllMessagesComment);
router.delete('/:id', messageCtrl.deleteComment);

module.exports = router;