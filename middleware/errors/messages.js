module.exports = {

    getUser: {
        castError: 'Некорректный id пользователя',
        notFoundError: 'Данного пользователя нет в базе',
    },

    registration: {
        emailUnique: 'Такой email уже существует',
        validationError: 'Ошибка валидации формы',
        name: 'Некорректно заполнено имя, имя должно содержать от 2 до 30 символов',
        email: 'Некорректная почта, посмотрите внимательно где вы допустили ошибку',
        password: 'Некорректный пароль, пароль должен содержать от 8 до 30 символов',
    },

    authorization: {
        unauthorized: 'Произошла ошибка при авторизации, неверный email или пароль',
        success: 'Вход успешно выполнен',
    },

    getArticleAll: {
        notFoundError: 'Произошла ошибка в выводе списка статей',
    },

    createArticle: {
        badRequest: 'Произошла ошибка в создании новой статьи',
        validationError: 'Ошибка валидации формы',
        keyword: 'Некорректное поле "ключевое слово"',
        title: 'Некорректное поле "заголовок статьи", оно должено содержать от 2 до 60 символов',
        text: 'Некорректное после "текст статьи", оно должено содержать от 60 символов',
        date: 'Некорректное поле "дата статьи", оно должно содержать данный формат 2020-12-31',
        source: 'Некорректное поле "источник статьи"',
        link: 'Некорректное поле "ссылка на статью"',
        image: 'Некорректное поле "ссылка на иллюстрацию к статье"',
    },

    deleteArticle: {
        castError: 'Произошла ошибка в удалении статьи',
        notFoundError: 'Произошла ошибка в удалении статьи, данной статьи не существует',
        unauthorized: 'Произошла ошибка в удалении статьи, у вас нет прав на удаление',
        id: 'Некорректный id статьи',
    },

    auth: {
        unauthorized: 'Необходима авторизация',
        notFoundError: 'Пользователь удален, необходимо снова зарегистрироваться',
    },

    notFound: 'Запрашиваемый ресурс не найден',
    serverError: 'На сервере произошла ошибка',
};
