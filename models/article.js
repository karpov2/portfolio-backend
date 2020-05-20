const mongoose = require('mongoose');
const { isURL } = require('validator');

const articleSchema = new mongoose.Schema({
    // ключевое слово, по которому статью нашли
    keyword: {
        type: String,
        required: true,
    },
    // заголовок статьи
    title: {
        type: String,
        minlength: 2,
        required: true,
    },
    // текст статьи
    description: {
        type: String,
        minlength: 2,
        required: true,
    },
    // дата статьи
    date: {
        type: String,
        required: true,
    },
    // источник статьи
    source: {
        type: String,
        required: true,
    },
    // ссылка на статью
    link: {
        type: String,
        required: true,
        validate: {
            validator: (link) => isURL(link),
            message: (props) => props.value,
        },
    },
    // ссылка на иллюстрацию к статье
    image: {
        type: String,
        required: true,
        validate: {
            validator: (link) => isURL(link),
            message: (props) => props.value,
        },
    },
    // _id пользователя, сохранившего статью
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true,
        // Так по умлочанию _id пользователя, сохранившего статью не будет возвращаться из базы.
        select: false,
    },
});

module.exports = mongoose.model('article', articleSchema);
