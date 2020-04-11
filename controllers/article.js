const Article = require('../models/article');
const NotFoundError = require('../middleware/errors/not-found');
const BadRequest = require('../middleware/errors/bad-request');
const Unauthorized = require('../middleware/errors/unauthorized');
const messages = require('../middleware/errors/messages');

// возвращает все статьи
module.exports.getArticleAll = (req, res, next) => {
    Article.find({})
        .then((cards) => res.send(cards))
        .catch(next);
};

// создаёт статью
module.exports.createArticle = (req, res, next) => {
    const {
        keyword, title, text, date, source, link, image, userId,
    } = req.body;

    Article.create({
        keyword, title, text, date, source, link, image, owner: userId,
    })
        .then((card) => res.status(201).send(card))
        .catch((err) => next(new BadRequest(err.message)));
};

// удаляет статью по идентификатору
module.exports.deleteArticle = (req, res, next) => {
    Article.findById(req.params.id)
        .orFail(new NotFoundError(messages.deleteArticle.notFound))
        .select('+owner')
        .then((article) => {
            if (!article) throw new NotFoundError(messages.deleteArticle.notFound);
            if (!article.owner.equals(req.body.userId)) {
                throw new Unauthorized(messages.deleteArticle.unauthorized);
            }

            return Article.deleteOne(article)
                .then(() => res.send({ message: messages.deleteArticle.delete }))
                .catch(next);
        })
        .catch(next);
};
