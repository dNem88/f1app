const authRouter = require('express').Router();
const { login, register, logout, validateReg, validateLogin } = require('../services/authServices');

authRouter.post('/register', validateReg, register);
authRouter.post('/login', validateLogin, login);
authRouter.post('/logout', logout);

module.exports = authRouter;