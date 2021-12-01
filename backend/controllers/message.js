const Message = require('../models/message');
const fs = require('fs');

exports.createMessage = (req, res, next) => {
  const message = {
    userId: req.body.userId,
    title: req.body.title,
    content: req.body.content,
    image: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}` : null,
    createdAt: Utils.getSqlDate(),
    updatedAt: Utils.getSqlDate()
  };
  Message.create(message)
    .then(() => res.status(201).json({
      message: "Message envoyé!"
    }))
    .catch(error => res.status(400).json({
      error
    }));
};


exports.deleteMessage = (req, res, next) => {
  Message.findOne({
      where: {
        id: req.params.id
      }
    })
    .then((message) => {
      Message.destroy({
          where: {
            id: req.params.id
          }
        })
        .then(() => res.status(200).json({
          message: 'Message supprimé'
        }))
        .catch(error => res.status(400).json({
          error
        }));
    })
    .catch(error => res.status(500).json({
      error
    }));
};


exports.getOneMessage = (req, res, next) => {
  db.Messages.findOne(req.params.id, {
      include: [{
          model: db.Users,
          attributes: ['firstname', 'lastname']
        },
        {
          model: db.Answers,
          attributes: ['content'],
          include: {
            model: db.Users,
            attributes: ['firstname', 'lastname']
          }
        },
      ]
    })
    .then(message => res.status(200).json(message))
    .catch(error => res.status(404).json({
      error
    }));
};


exports.getAllMessages = (req, res, next) => {
  Message.findAll({
      include: ["user", "answers"]
    })
    .then((messages) => res.status(200).json(messages))
    .catch(error => res.status(400).json({
      error
    }));
};