const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');


exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10) 
        .then(hash => {
            const user = new User({
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                email: req.body.email,
                password: hash,
                isAdmin: false,
            });
            User.create(user, (err, data) => {
                if (err) {
                    return res.status(400).json({
                        message: 'Impossible de créer l\'utilisateur'
                    });
                }
                res.send(data);
            })
        })
        .catch(error => res.status(500).json({
            error
        }));
};

exports.login = (req, res, next) => {
    User.findOneByEmail(req.body.email, (err, result) => {
        if (err) {
            return res.status(400).json({
                message: 'Utilisateur non trouvé'
            });
        }

        bcrypt.compare(req.body.password, result.password)
            .then(valid => {
                if (!valid) {
                    return res.status(401).json({
                        message: 'Mot de passe invalide'
                    })
                } else {
                    let payload = {
                        'userId': result.id,
                        'isAdmin': !!result.isAdmin
                    };
                    let profile = result.picture;
                    if (!result.picture) {
                        profile = ''
                    }
                    res.status(200).json({
                        lastname: result.lastname,
                        firstname: result.firstname,
                        userId: result.id,
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
};