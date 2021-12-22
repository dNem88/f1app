const authData = require('../data/authData');
const bcrypt = require('bcrypt');
const salt = process.env.SALT;
const validator = require('validator');
const jwt = require('jsonwebtoken');
// import jwt to send to the user
// set cookie 
// create db session*/



async function login(req,res,next) {
    const token = generateToken(req.session.user); /*add user as a jwt payload*/
    req.session.user.authToken = token;
    res.status(200).json(req.session.user);
};
async function register(req, res, next) {
    const {username, password, email} = req.body;
    bcrypt.hash(password, Number(salt), async(err, encrypted) => {
        if (err) {
            return {error: 'Could not encrypt password'}
        }
        if (encrypted) {
            try {
                const user = await authData.registerUser(req, {
                    username: username,
                    password: encrypted,
                    email: email
                });
                res.status(200).json(user);
            } catch (e) {
                res.status(400).json({
                    error: {
                        message: 'Failed to register new User!'
                    }
                });
            }
        }
        
    });
};
async function logout(req, res, next) {
    req.session.destroy((err) => {
        return err;
    });
    res.status(200).json({message: 'You successfully logout'});
};


function validateReg(req,res,next) {
    const {username, password, confirmPassword, email} = req.body;
    const isValidUsername =  validator.isAlphanumeric(username);
    const isSecurePassword = validator.isStrongPassword(password, {
        minLength: 8,
        minUppercase: 1,
        minLowercase: 2,
        minNumbers: 1
    });
    const isEmail = validator.isEmail(email);
    const areEqual = validator.equals(password, confirmPassword);
    if (req.body === null || req.body === undefined || Object.values(req.body).includes('') || req.body === false) {
        return res.status(204).json({error: {
            message: "All fields are required!"
        }});
    }
    if (!isValidUsername) {
        return res.status(400).json({error: {
            message: 'Username must contain only English letters and digits!'
        }});
    }
    if (!isSecurePassword) {
        return res.status(400).json({error: {
            message: "Password must be at least 8 charactars long. Must contain at least 1 digit, lowercase and uppercase letters!"
        }});
    }
    if (!areEqual) {
        return res.status(400).json({error: {
            message: 'Password and Confirm Password must be equal!'
        }});
    }
    if (!isEmail) {
        return res.status(400).json({error: {message: 'Please enter valid email address!'}})
    }
    /*If the function doesn't return Error => call the next function*/
    next();
}
async function validateLogin(req,res,next) {
    const {username, password} = req.body;
    
    const validUser = await authData.findUser(username, req); /*DB check for such user*/
    if (!validUser) {
        return res.status(400).json({error: {message: "No such user!"}});
    } 
    req.session.user = {
        _id: validUser._id,
        username: validUser.username,
        email: validUser.email
    };
    const passMatch = await bcrypt.compare(password, validUser.password);
    if (!passMatch) {
        return res.status(400).json({error: {message: "Password doesn't match!"}});
    }
    next();
}

function generateToken(user) {
    return jwt.sign(user, process.env.SECRET_KEY, {expiresIn: '3h'});
}

module.exports = {
    login,
    register,
    logout,
    validateReg,
    validateLogin
};