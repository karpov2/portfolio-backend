require('dotenv')
    .config();

const {
    NODE_ENV, JWT_SECRET, PORT, MONGODB,
} = process.env;

const whitelist = ['http://localhost:8080', 'https://karpov2.github.io', 'http://127.0.0.1:8080'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    allowedHeaders: 'Origin, Content-Type, Accept',
    optionsSuccessStatus: 200,
    credentials: true,
    preflightContinue: true,
}

module.exports = {
    // Мод
    NODE_ENV,
    // Порт который слушает сервер
    PORT: PORT || 3000,
    // Ссылка на базу данных
    DATABASE: NODE_ENV === 'production' ? MONGODB : 'mongodb://localhost:27017/portfolio',
    // Секретный ключ в зависимости от сборки
    JWT_SECRET: NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret',
    corsOptions
};
