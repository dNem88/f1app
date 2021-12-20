
async function findUser(username, req) {
    const user = await req.app.locals.client.db('f1').collection('users').findOne({'username': username});
    return user;
}
async function registerUser(req, credentials) {
    /*TO DO check if username is unique*/
    const {username, password, email} = credentials;
    try {
        const user = await req.app.locals.client.db('f1').collection('users').insertOne({
            username: username,
            password: password,
            email: email,
        });
        return user;
    } catch(e) {
        return {error: {
            message: 'Failed to register new User!'
        }};
    }
}
module.exports = {
    findUser,
    registerUser
}