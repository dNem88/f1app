const express = require('express');
const app = express();
const router = require('./routes');
const path = require('path');
const cors = require('cors');
require('dotenv').config({
    path: path.resolve(process.cwd(), 'config/.env')
});


app.use(express.urlencoded({extended: true}));
app.use(express.json());

const session = require('./middlewares/session');
app.use(session());
app.use(cors({
    methods: ['GET', 'POST'],
    origin: "*",
    allowedHeaders: ['Authorization', 'Content-type']
}));

app.use(router);
require('./config/database')(app);



app.listen(process.env.PORT , console.log(`Server listens on port ${process.env.PORT}`));


