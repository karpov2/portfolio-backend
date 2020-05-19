const router = require('express').Router();
const schemas = require('../middleware/schemas/users');
const { getUser } = require('../controllers/users');

router.get('/me', schemas.getUser, getUser); // возвращает пользователя

module.exports = router;
