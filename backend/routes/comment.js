const express = require('express');
const router = express.Router();

const auth = require('../middlewares/auth')
const multer = require('../middlewares/multer-config')
const commentCtrl = require('../controllers/comment');

router.post('/', auth, commentCtrl.createComment);
router.get('/', auth, commentCtrl.getAllMessagesComment);
router.delete('/:id', auth, commentCtrl.deleteComment);

module.exports = router;