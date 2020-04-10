const router = require('express').Router();
const schemas = require('../middleware/schemas/article');
const articles = require('../controllers/article');

router.get('/', articles.getArticleAll); // возвращает все статьи
router.post('/', schemas.createArticle, articles.createArticle); // создаёт статью
router.delete('/:id', schemas.deleteArticle, articles.deleteArticle); // удаляет статью по идентификатору

module.exports = router;
