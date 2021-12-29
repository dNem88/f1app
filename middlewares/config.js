const session = require('./session');
const cors = require('cors');
const express = require('express');

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
    app.set('views', '../views');
    app.set('view engine', 'ejs');
};