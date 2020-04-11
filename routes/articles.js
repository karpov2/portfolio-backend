const router = require('express').Router();
const schemas = require('../middleware/schemas/article');
const { getArticleAll, createArticle, deleteArticle } = require('../controllers/article');

router.get('/', getArticleAll); // возвращает все статьи
router.post('/', schemas.createArticle, createArticle); // создаёт статью
router.delete('/:id', schemas.deleteArticle, deleteArticle); // удаляет статью по идентификатору

module.exports = router;
