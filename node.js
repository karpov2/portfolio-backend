const mongoose = require('mongoose');
const express = require('express');
const helmet = require('helmet');
// const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const limiter = require('./middleware/limiter');
const router = require('./routes');
const config = require('./config');

mongoose.connect(config.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
})
    .then(() => {
        console.info('Database connected');

        const app = express();
        // app.use(cors(config.corsOptions));
        // Add headers
        app.use(function (req, res, next) {
            // Website you wish to allow to connect
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
            // Request methods you wish to allow
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            // Request headers you wish to allow
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            // Set to true if you need the website to include cookies in the requests sent
            // to the API (e.g. in case you use sessions)
            res.setHeader('Access-Control-Allow-Credentials', true);
            // Pass to next layer of middleware
            next();
        });
        app.use(limiter);
        app.use(helmet());
        app.use(cookieParser()); // подключаем парсер кук как мидлвэр
        app.use(bodyParser.json()); // parse application/json
        app.use(router);

        app.listen(config.PORT, () => {
            console.info(`App listening on port: ${config.PORT}`);
            console.info(`NODE_ENV: ${config.NODE_ENV}`);
        });
    })
    .catch((error) => {
        console.error('Database connected Error: ', error);
    });
