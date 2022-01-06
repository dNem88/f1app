const mongodb = require('mongodb');
const app = require('../index');

const validator = require('validator');
const supertest = require('supertest');
const client = new mongodb.MongoClient(process.env.DB_URI,
{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/*USERS Mongo collection validation tests and Reponse Headers*/
describe('Test User DB collection', () => {
            beforeAll(async() => {
                const connection = await client.connect();
                if (connection) {
                    app.connection = connection;
                }
            });
            test('test user email match', async() => {
                expect((await app.connection.db('f1').collection('users').findOne({
                    username: "daninemski"
                })).email).toBe("daniel@gmail.com");
            });
            test('username match', async () => {
                expect((await app.connection.db('f1').collection('users').findOne({
                    username: "daninemski"
                })).username).toBe("daninemski");
            });
            test('username to be Alphanumeric', async () => {
                let user = await app.connection.db('f1').collection('users').findOne({
                    username: "daninemski"
                });
                expect(validator.isAlphanumeric(user.username)).toBe(true);
            });
            test('All usernames are Alphanumeric', async () => {
                let users = (await app.connection.db('f1').collection('users').find(
                  ).toArray()).map(x => validator.isAlphanumeric(x.username));
                expect(users).not.toContain(false);
            })
            test('All emails are valid', async () => {
                let emails = (await app.connection.db('f1').collection('emails').find().toArray()).map(x => validator.isEmail(x.email));
                expect(emails).not.toContain(false);
            });
            test('Response Headers', async () => {
                let response = await supertest(app).get('/');
                expect(response.headers['set-cookie']).toBeDefined();
                expect(response.headers['access-control-allow-origin']).toBeDefined();
                expect(response.headers['content-type'].includes('text/html')).toBe(true);
                expect(response.headers['content-type'].includes('charset=utf-8')).toBe(true);

            });
            afterAll(async() => {
                await client.close();
            });
        });


