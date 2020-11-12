// Core
import express from 'express';
import bodyParser from 'body-parser';
import dg from 'debug';
import path from 'path';
import cors from 'cors';
import helmet from 'helmet';

// Routes
import { product } from './routers/product/index.js';
import { user } from './routers/user/index.js';
import { order } from './routers/order/index.js';
import { upload } from './routers/upload/index.js';
// Helpers
import { NotFoundError } from './helpers/errors/index.js';
// Initialize DB connection
import'./db/index.js';


const app = express();
const debug = dg('server:init');
/*const MongoStore = connectMongo(session);*/
/*

const sessionOptions = {
    key:               'user',
    secret:            getPassword(),
    resave:            false,
    rolling:           true,
    saveUninitialized: false,
    store:             new MongoStore({ mongooseConnection: mongoose.connection }),
    cookie:            {
        httpOnly: true,
        maxAge:   15 * 60 * 1000, //15 min
    },
};
*/

/*

// change cookie max age for development
if (process.env.NODE_ENV === 'development') {
    sessionOptions.cookie.maxAge = 8 * 60 * 60 * 1000; // 8 hours
}

// secure cookie for production
if (process.env.NODE_ENV === 'production') {
    sessionOptions.cookie.secure = true;
}
*/


app.use(
    bodyParser.json({
        limit: '5kb',
    }),
);
/*app.use(session(sessionOptions));*/


if (process.env.NODE_ENV === 'development') {
    app.use((req, res, next) => {
        const body
            = req.method === 'GET'
                ? 'Body not supported for GET'
                : JSON.stringify(req.body, null, 2);

        debug(`${req.method}\n${body}`);
        next();
    });
}
app.use('/api/product', product)
app.use('/api/user', user)
app.use('/api/order', order)
app.use('/api/upload', upload)
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}
app.use('*', (req, res, next) => {
    const error = new NotFoundError(
        `Can not find right route for method ${req.method} and path ${req.originalUrl}`,
        404,
    );
    next(error);
});


if (process.env.NODE_ENV !== 'test') {
    // eslint-disable-next-line no-unused-vars
    app.use((error, req, res, next) => {
        const { name, message, statusCode } = error;
        const errorMessage = `${name}: ${message}`;

        debug(`Error: ${errorMessage}`);

        const status = statusCode ? statusCode : 500;
        res.status(status).json({ message: message });
    });
}

export {app}
