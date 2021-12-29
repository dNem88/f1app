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
        methods: ['GET', 'POST'],
        origin: "*",
        allowedHeaders: ['Authorization', 'Content-type']
    }));
    app.use('/static', express.static(`${root}/static`));
    app.set('views', `${root}/views`);
    app.set('view engine', 'ejs');
};