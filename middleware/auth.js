const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');
const Unauthorized = require('./errors/unauthorized');
const NotFoundError = require('./errors/not-found');
const messages = require('./errors/messages');

module.exports = (req, res, next) => {
    // Достаем токен из кукана)
    const { token } = req.cookies;

    const errors = new Unauthorized(messages.auth.unauthorized);

    // if (!token) throw next(errors);
    if (!token) throw next({
        message: 'Нет куки 1',
        token,
        cookies: req.cookies
    });

    let payload;
    try {
        // попытаемся верифицировать токен
        payload = jwt.verify(token, config.JWT_SECRET);
    } catch (error) {
        // throw next(errors);
        throw next({
            message: 'Нет куки 2',
            token,
            cookies: req.cookies
        });
    }

    req.body.userId = payload._id; // записываем пейлоуд в объект запроса
    return User.findById(req.body.userId)
        .orFail(new NotFoundError(messages.auth.notFound))
        .then(() => next())
        .catch(next);
};
