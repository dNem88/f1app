const mongoStore = require('connect-mongo');
const session = require('express-session');

module.exports = function sessionSetup(req,res,next) {
    return session({
            saveUninitialized: true,
            resave: false,
            secret: process.env.SECRET_KEY,
            name: process.env.COOKIE_NAME,
            store: mongoStore.create({
                mongoUrl: process.env.DB_URI,
                collectionName: 'sessions'
            }),
            cookie: {
                path: '/',
                maxAge: 10800000,
                httpOnly: true,
            }
        });
};