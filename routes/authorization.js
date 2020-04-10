const router = require('express').Router();
const schemas = require('../middleware/schemas/authorization');
const authorization = require('../controllers/authorization');

router.post('/', schemas.authorization, authorization); // авторизация пользователя

module.exports = router;
