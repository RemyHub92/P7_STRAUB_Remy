const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


exports.signup = (req, res, next) => {
    console.log(req.body);
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            User.create({
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                email: req.body.email,
                password: hash,
                isAdmin: false,
            })
            .then(user => res.status(200).json(user))
            .catch(error => res.status(404).json({
                error
              }));
        })
      
};

exports.login = (req, res, next) => {
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(result => {
            bcrypt.compare(req.body.password, result.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({
                            message: 'Mot de passe invalide'
                        })
                    } else {
                        let payload = {
                            'id': result.id,
                            'isAdmin': !!result.isAdmin
                        };
                        let profile = result.picture;
                        if (!result.picture) {
                            profile = ''
                        }
                        res.status(200).json({
                            lastname: result.lastname,
                            firstname: result.firstname,
                            picture: profile,
                            isAdmin: result.isAdmin,
                            token: jwt.sign(
                                payload,
                                `${process.env.JWT_KEY}`, {
                                    expiresIn: '24h'
                                }
                            )
                        })
                    }
                })
                .catch(error => res.status(500).json({
                    error: "Erreur serveur"
                }));
        })
        .catch(error => res.status(404).json({
            error
        }));

};