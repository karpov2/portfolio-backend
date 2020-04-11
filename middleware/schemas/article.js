const { celebrate, Joi, Segments } = require('celebrate');
const messages = require('../errors/messages');

module.exports.createArticle = celebrate({
    [Segments.BODY]: Joi.object().keys({
        keyword: Joi.string().required()
            .error(new Error(messages.createArticle.keyword)),
        title: Joi.string().required().min(2)
            .error(new Error(messages.createArticle.title)),
        text: Joi.string().required().min(2)
            .error(new Error(messages.createArticle.text)),
        date: Joi.string().required().min(2)
            .error(new Error(messages.createArticle.date)),
        source: Joi.string().required().min(2)
            .error(new Error(messages.createArticle.source)),
        link: Joi.string().required().uri()
            .error(new Error(messages.createArticle.link)),
        image: Joi.string().required().uri()
            .error(new Error(messages.createArticle.image)),
        userId: Joi.string().alphanum().length(24)
            .error(new Error(messages.getUser.castError)),
    }),
});

module.exports.deleteArticle = celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().alphanum().length(24)
            .error(new Error(messages.deleteArticle.id)),
    }),
});
