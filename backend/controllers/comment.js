const Comment = require('../models/comment');
const fs = require('fs');


exports.createComment = (req, res, next) => {
    Comment({
        userId: req.body.userId,
        messageId: req.body.messageId,
        content: req.body.content,
        createdAt: Utils.getSqlDate(),
        updatedAt: Utils.getSqlDate(),
    });
    Comment.create(newComment)  
    .then(message =>  res.status(200).json(message))
    .catch(error => res.status(404).json({
      error
    }));
};


exports.getAllMessagesComment = (req, res, next) => {
    Comment.findAllMessagesComment((err, data) => {
        if (err) {
            return res.status(400).json({
                message: 'Impossible de récupérer les messages'
            });
        }
        res.status(200).json(data)
    });
};


exports.deleteComment = (req, res, next) => {
    Comment.delete(req.params.id, (err, data) => {
        if (err) {
            return res.status(400).json({
                message: 'Comment non supprimé'
            });
        }
        res.status(200).json({
            message: 'Le comment a été supprimé !'
        })
    })
};