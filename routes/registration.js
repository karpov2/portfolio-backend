const router = require('express').Router();
const schemas = require('../middleware/schemas/registration');
const { registration } = require('../controllers/registration');

// создание пользователя
router.post('/', schemas.registration, registration);

module.exports = router;
