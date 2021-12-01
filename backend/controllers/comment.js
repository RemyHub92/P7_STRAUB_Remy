const Comment = require('../models/comment');
const fs = require('fs');


exports.createComment = (req, res, next) => {
    const newComment = new Comment({
        userId: req.body.userId,
        content: req.body.content,
        createdAt: Utils.getSqlDate(),
        updatedAt: Utils.getSqlDate(),
    });

    Comment.create(newComment, (err, data) => {
        if (err) {
            return res.status(400).json({
                message: "From Back Impossible de créer le commentaire"
            });
        }
        Comment.latest((err, result) => {
            res.send({
                message_id: result.message_id,
                comment_id: result.id,
                comment_pseudo: result.pseudo,
                comment_content: result.comment
            });
        });
    })
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