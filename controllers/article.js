const Article = require('../models/article');
const NotFoundError = require('../middleware/errors/not-found');
const BadRequest = require('../middleware/errors/bad-request');
const Unauthorized = require('../middleware/errors/unauthorized');
const messages = require('../middleware/errors/messages');

module.exports = {
    // возвращает все статьи
    getArticleAll: (req, res, next) => {
        Article.find({})
            .then((cards) => res.send(cards))
            .catch(next);
    },

    // создаёт статью
    createArticle: (req, res, next) => {
        const {
            keyword, title, text, date, source, link, image, userId,
        } = req.body;
        Article.create({
            keyword, title, text, date, source, link, image, owner: userId,
        })
            .then((card) => res.source(201).send(card))
            .catch((err) => next(new BadRequest(err.message)));
    },

    // удаляет статью по идентификатору
    deleteArticle: (req, res, next) => {
        Article.findById(req.params.id)
            .orFail(new NotFoundError(messages.cardDelete.notFoundError))
            .then((article) => {
                if (!article) throw new NotFoundError(messages.cardDelete.notFoundError);
                if (!article.owner.equals(req.body.userId)) {
                    throw new Unauthorized(messages.cardDelete.unauthorized);
                }

                return Article.deleteOne(article).then(() => res.send(article));
            })
            .catch(next);
    },
};
