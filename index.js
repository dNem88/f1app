const express = require('express');
const app = express();
const env = require('./config/env');
const router = require('./routes');
require('./config/database')(app);

app.use(express.urlencoded({extended: true}));
app.use(router);
app.use(express.json());

app.listen(env.development.PORT, console.log(`Server listens on port ${env.development.PORT}`));


