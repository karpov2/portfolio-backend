const NotFound = require('../middleware/errors/not-found');
const messages = require('../middleware/errors/messages');

module.exports = (req, res, next) => next(new NotFound(messages.notFound));
