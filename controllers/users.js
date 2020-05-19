const User = require('../models/user');
const NotFoundError = require('../middleware/errors/not-found');
const messages = require('../middleware/errors/messages');

// возвращает пользователя по _id
module.exports.getUser = (req, res, next) => {
    User.findById(req.body.userId)
        .orFail(new NotFoundError(messages.getUser.notFound))
        .then(({ _doc }) => {
            const user = _doc;
            delete user._id;
            delete user.__v;
            res.json(user);
        })
        .catch(next);
};
