const express = require('express');
const app = express();
const env = require('./config/env');



app.listen(env.development.PORT, console.log(`Server listens on port ${env.development.PORT}`));

require('./config/database')(app);