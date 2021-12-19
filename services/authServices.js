/*import validator to validate credentials
import bcrypt to hash the password
import jwt to send to the user
set cookie 
create db session*/


async function login(req,res,next) {
    res.status(200).send('login');
    console.log('login');
};
async function register(req, res, next) {
    res.status(200).send('register');
    console.log('register');
};

async function logout(req, res, next) {
    res.status(200).send('logout');
    console.log('logout');
};


module.exports = {
    login,
    register,
    logout
};