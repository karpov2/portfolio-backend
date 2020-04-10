const { celebrate, Joi, Segments } = require('celebrate');
const messages = require('../errors/messages');

module.exports = {
    authorization: celebrate({
        [Segments.BODY]: Joi.object().keys({
            email: Joi.string().required().email()
                .error(new Error(messages.registration.email)),
            password: Joi.string().required().regex(/^[a-zA-Z0-9]{8,30}$/)
                .error(new Error(messages.registration.password)),
        }),
    }),
};
