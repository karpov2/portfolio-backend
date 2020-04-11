const { celebrate, Joi, Segments } = require('celebrate');
const messages = require('../errors/messages');

module.exports.registration = celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().min(2).max(30)
            .error(new Error(messages.registration.name)),
        email: Joi.string().required().email()
            .error(new Error(messages.registration.email)),
        password: Joi.string().required().regex(/^[a-zA-Z0-9]{8,30}$/)
            .error(new Error(messages.registration.password)),
    }),
});
