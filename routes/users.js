const router = require('express').Router();
const schemas = require('../middleware/schemas/users');
const users = require('../controllers/users');

router.get('/me', schemas.getUser, users.getUser); // возвращает пользователя

module.exports = router;
