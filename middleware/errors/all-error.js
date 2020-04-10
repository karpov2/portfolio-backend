const messages = require('./messages');

module.exports = (err, req, res, next) => {
    const { statusCode = 500, message } = err;

    console.log('all Error');
    res.status(statusCode).send(
        { message: statusCode === 500 ? messages.serverError : message },
    );
};
