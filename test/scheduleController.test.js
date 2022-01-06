const mongodb = require('mongodb');
const app = require('../index');
const supertest = require('supertest');
const client = new mongodb.MongoClient(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

describe('testing scheduleController', () => {
    beforeAll(async() => {
        const connection = await client.connect();
        if (connection) {
            app.connection = connection;
        }
    });
    test('/schedule endpoint', async() => {
        const response = await supertest(app).get('/schedule');
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(20);
        expect(response.body[0].Circuit).toBeTruthy();
        expect(response.body[11].hasOwnProperty('season')).toBe(true);
        expect(response.body[7].hasOwnProperty('round')).toBe(true);
        expect(response.body[7].hasOwnProperty('date')).toBe(true);
    });
    test('/schedule/:id  endpoint', async () => {
        const response = await supertest(app).get('/schedule/61bf42fffeab6a926247b6d9');
        expect(response.body.Circuit).toBeTruthy();
        expect(response.body.hasOwnProperty('season')).toBe(true);
        expect(response.body.hasOwnProperty('round')).toBe(true);
        expect(response.body.hasOwnProperty('date')).toBe(true);
        expect(response.body.raceName).toBeDefined();
        expect(response.body._id).toBe('61bf42fffeab6a926247b6d9');
    });
    afterAll(async() => {
        await app.connection.close();
    });
});