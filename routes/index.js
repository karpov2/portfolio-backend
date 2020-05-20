const router = require('express').Router();
const { errors } = require('celebrate');
// Миделверы
const auth = require('../middleware/auth');
const allError = require('../middleware/errors/all-error');
const { requestLogger, errorLogger } = require('../middleware/log/logger');
// Роутеры
const registration = require('./registration');
const authorization = require('./authorization');
const users = require('./users');
const articles = require('./articles');
const errorPage = require('./error');
// Контролер
const {exit} = require('../controllers/authorization')

router.use(requestLogger); // подключаем логгер запросов

router.use('/signup', registration); // создание пользователя
router.use('/signin', authorization); // авторизация пользователя

router.use(auth); // Аунтификация, проверка токена (на права доступа)
router.get('/exit', exit); // выход из ЛК
router.use('/users', users);
router.use('/articles', articles);
router.all('*', errorPage);

router.use(errorLogger); // подключаем логгер ошибок
router.use(errors()); // подключаем логгер ошибок

// централизованный обработчик ошибок
router.use(allError);

module.exports = router;
