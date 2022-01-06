const mongodb = require('mongodb');
const app = require('../index');
const supertest = require('supertest');
const client = new mongodb.MongoClient(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

describe('testing teamsController', () => {
    beforeAll(async () => {
        const connection = await client.connect();
        if (connection) {
            app.connection = connection;
        }
    });
    test('/teams endpoint', async () => {
        const response = await supertest(app).get('/teams');
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBe(10);
        expect(response.body[0].name).toBeTruthy();
        expect(response.body[8].hasOwnProperty('teamChief')).toBe(true);
        expect(response.body[7].hasOwnProperty('powerUnit')).toBe(true);
        expect(response.body[6].hasOwnProperty('wins')).toBe(true);
    });
    test('/teams/:id  endpoint', async () => {
        const response = await supertest(app).get('/teams/61cc225014cf8cfc96af65ad');
        expect(response.body.championships).toBeTruthy();
        expect(response.body.hasOwnProperty('base')).toBe(true);
        expect(response.body.hasOwnProperty('chasis')).toBe(true);
        expect(response.body.hasOwnProperty('poles')).toBe(true);
        expect(response.body.firstTeamEntry).toBeDefined();
        expect(response.body._id).toBe('61cc225014cf8cfc96af65ad');
    });
    afterAll(async () => {
        await app.connection.close();
    });
});