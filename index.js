const express = require('express');
const app = express();
const router = require('./routes');
const path = require('path');


    // require('dotenv').config({
    //     path: path.resolve(process.cwd(), 'config/.env')
    // });/*must not be included in production*/


require('./middlewares/config')(app);
require('./config/database')(app);
app.use(router);

app.listen(process.env.PORT || 3020, console.log(`Server listens on port ${3020}`));

// module.exports = app; /*This is made for testing with JEST*/



/*Deployed at   https://boiling-brushlands-51072.herokuapp.com  */
/* https://dashboard.heroku.com/apps/boiling-brushlands-51072/deploy/github */