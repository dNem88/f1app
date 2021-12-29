const express = require('express');
const app = express();
const router = require('./routes');
const path = require('path');

// require('dotenv').config({
//     path: path.resolve(process.cwd(), 'config/.env')
// });
require('./middlewares/config')(app);
require('./config/database')(app);
app.use(router);

app.listen(process.env.PORT, console.log(`Server listens on port ${process.env.PORT}`));


