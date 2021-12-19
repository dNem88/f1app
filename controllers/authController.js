const authRouter = require('express').Router();
const { login, register, logout } = require('../services/authServices');

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);



module.exports = authRouter;