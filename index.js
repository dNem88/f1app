const express = require('express');
const app = express();
const router = require('./routes');
const path = require('path');
require('dotenv').config({
    path: path.resolve(process.cwd(), 'config/.env')
});
const mongoStore = require('connect-mongo');
const session = require('express-session');

app.use(session({
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
}));


require('./config/database')(app); 

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(router);



app.listen(process.env.PORT , console.log(`Server listens on port ${process.env.PORT}`));


