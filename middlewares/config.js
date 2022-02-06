
const cors = require('cors');
const express = require('express');
const path = require('path')
let root = path.parse(__dirname).dir;
const cookieParser = require('cookie-parser')
module.exports = (app) => {
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json());
    app.use(cors({
        methods: "GET, POST, PUT",
        origin: 'http://localhost:3000',
        preflightContinue: true,
        credentials: true
    }));
    app.use(cookieParser(process.env.SECRET_KEY))
    app.set('view engine', 'ejs');
    app.use('/static', express.static(`${root}/static`));
};