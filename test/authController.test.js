const mongodb = require('mongodb');
const app = require('../index');
const supertest = require('supertest');
const client = new mongodb.MongoClient(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

describe('AuthController testing', () => {
    beforeAll(async() => {
        const connection = await client.connect();
        if (connection) {
            app.connection = connection;
        }
    });

    test('/register route', async() => {
        const successInput = {
            username: "danielNemski",
            password: "Daniel123%%",
            confirmPassword: "Daniel123%%",
            email: 'daniel@gmail.com'
        };
        const takenUsername = {
            username: "DamielNemski", /*the username is already registered*/
            password: "Daniel123%%",
            confirmPassword: "Daniel123%%",
            email: 'daniel@gmail.com'
        };
        const response = await supertest(app).post('/users/register').send(successInput);
        expect(response.body.insertedId).toBeTruthy();
        expect(response.body.acknowledged).toBeTruthy();
        const resTaken = await supertest(app).post('/users/register').send(takenUsername);
        expect(resTaken.body.insertedId).toBeUndefined();
        expect(resTaken.body.acknowedged).toBeUndefined();
        expect(resTaken.body.error.hasOwnProperty('message')).toBe(true);
        expect(resTaken.body.error.message.includes('Username already exist! Please create another one')).toBe(true);
        const errResEmptyFields = await supertest(app).post('/users/register').send({test: "testSomethin"});
        expect(errResEmptyFields.body.hasOwnProperty("error")).toBe(true);
        expect(errResEmptyFields.body.error.hasOwnProperty("message")).toBe(true);
        expect(errResEmptyFields.body.error.message.includes("All fields are required!")).toBe(true);
        const nonAlphanumericUsername = await supertest(app).post('/users/register').send({
            username: "testSo8$methin", /*$ should not be accepted*/
            password: "Daniel123%%",
            confirmPassword: "Daniel123%%",
            email: 'daniel@gmail.com'
        });
        expect(nonAlphanumericUsername.body.hasOwnProperty('error')).toBe(true);
        expect(nonAlphanumericUsername.body.error.message).toBe('Username must contain only English letters and digits!');
        const unmatchedPasswords = await supertest(app).post('/users/register').send({
            username: "testSomethin",
            password: "Daniel123%%",
            confirmPassword: "daniel123%%",
            email: 'daniel@gmail.com'
        });
        expect(unmatchedPasswords.body.hasOwnProperty('error')).toBe(true);
        expect(unmatchedPasswords.body.error.message).toBe('Password and Confirm Password must be equal!');
        const notSecurePassword = await supertest(app).post('/users/register').send({
            username: "testSo8methin",
            password: "daniel123%%", 
            confirmPassword: "daniel123%%",
            email: 'daniel@gmail.com'
        });
        expect(notSecurePassword.body.hasOwnProperty('error')).toBe(true);
        expect(notSecurePassword.body.error.message).toBe("Password must be at least 8 charactars long. Must contain at least 1 digit, lowercase and uppercase letters!");
        const wrongEmail = await supertest(app).post('/users/register').send({
            username: "testSo8methin",
            password: "Daniel123%%",
            confirmPassword: "Daniel123%%",
            email: 'danielgmail.com'
        });
        expect(wrongEmail.body.hasOwnProperty('error')).toBe(true);
        expect(wrongEmail.body.error.message).toBe('Please enter valid email address!'); 
    });
    test('/login route', async() => {
        const invalidInput =  await supertest(app).post('/users/login').send({
            username: "daninemski"
        });
        expect(invalidInput.body.error.hasOwnProperty("message")).toBe(true);
        expect(invalidInput.body.error.message).toBe("Invalid input!");
        const noSuchUser = await supertest(app).post('/users/login').send({
            username: "daninem88ski",
            password: "danie1lsome"
        });
        expect(noSuchUser.body.error.hasOwnProperty("message")).toBe(true);
        expect(noSuchUser.body.error.message).toBe("No such user!");
        const passwordNotMatch = await supertest(app).post('/users/login').send({
            username: "daninemski",
            password: "danie1lsome"
        });
        expect(passwordNotMatch.body.error.hasOwnProperty("message")).toBe(true);
        expect(passwordNotMatch.body.error.message).toBe("Password doesn't match!");
        const loggedUser = await supertest(app).post('/users/login').send({
            username: 'daninemski',
            password: 'Daniel123$$'
        });
        expect(loggedUser.body.hasOwnProperty('error')).toBe(false);
        expect(loggedUser.body.hasOwnProperty('_id')).toBe(true);
        expect(loggedUser.body.username).toBe('daninemski');
        expect(loggedUser.body.email).toBeTruthy();
        expect(loggedUser.body.authToken).toBeDefined();
        expect(loggedUser.status).toBe(201);
        
    });
    test('/logout route', async() => {
        const response = await supertest(app).post('/users/logout');
        expect(response.body).toBeTruthy();
        expect(response.body.message).toBeDefined();
        expect(response.body.message).toBe("You successfully logout");
        
    })
    afterAll(async() => {
        await client.db('f1').collection('users').deleteOne({
            username: "danielNemski"
        });
        await client.close();
    });
});