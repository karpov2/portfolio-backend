const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');
const Unauthorized = require('./errors/unauthorized');
const NotFoundError = require('./errors/not-found');
const messages = require('./errors/messages');

module.exports = (req, res, next) => {
    // Достаем токен из кукана)
    const { token } = req.cookies;

    // const errors = new Unauthorized(messages.auth.unauthorized);
    const errors = new Unauthorized('Нет куки 1');
    const errors2 = new Unauthorized('Нет куки 2');

    // if (!token) throw next(errors);
    if (!token) {
        return res.status(300).send({
            message: 'Нет куки 1',
            cookies: token | {},
            req: req.cookies | {},
            reqBody: req.body | {},
        });
        // throw next(errors)
    }

    let payload;
    try {
        // попытаемся верифицировать токен
        payload = jwt.verify(token, config.JWT_SECRET);
    } catch (error) {
        throw next(errors2);
    }

    req.body.userId = payload._id; // записываем пейлоуд в объект запроса
    return User.findById(req.body.userId)
        .orFail(new NotFoundError(messages.auth.notFound))
        .then(() => next())
        .catch(next);
};
