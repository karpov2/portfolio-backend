const { celebrate, Joi, Segments } = require('celebrate');
const messages = require('../errors/messages');

module.exports = {
    getUser: celebrate({
        [Segments.BODY]: Joi.object().keys({
            userId: Joi.string().alphanum().length(24)
                .error(new Error(messages.getUser.castError)),
        }),
    }),
};
