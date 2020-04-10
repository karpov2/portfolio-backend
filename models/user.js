const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    // имя пользователя
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    // email пользователя
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (email) => isEmail(email),
            message: (props) => props.value,
        },
    },
    // password пользователя
    password: {
        type: String,
        required: true,
        minlength: 8,
        // Так по умлочанию хеш пароля пользователя не будет возвращаться из базы.
        select: false,
    },
});

module.exports = mongoose.model('user', userSchema);
