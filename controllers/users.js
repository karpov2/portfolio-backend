const User = require('../models/user');
const NotFoundError = require('../middleware/errors/not-found');
const messages = require('../middleware/errors/messages');

module.exports = {
    // возвращает пользователя по _id
    getUser: (req, res, next) => {
        User.findById(req.body.userId)
            .orFail(new NotFoundError(messages.getUserId.notFoundError))
            .then((user) => res.json(user))
            .catch(next);
    },
};
