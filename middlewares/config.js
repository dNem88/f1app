const session = require('./session');
const cors = require('cors');
const express = require('express');
const path = require('path')
let root = path.parse(__dirname).dir;


module.exports = (app) => {
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json());
    app.use(session());
    app.use(cors({
        methods: "GET, POST,PUT,DELETE",
        origin: '*',
        preflightContinue: false
    }));
    app.set('view engine', 'ejs');
    // app.set('views', `${root}/views`);
    app.use('/static', express.static(`${root}/static`));
};