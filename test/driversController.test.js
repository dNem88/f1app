const mongodb = require('mongodb');
const app = require('../index');
const supertest = require('supertest');
const client = new mongodb.MongoClient(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/*Testing driversController / Router*/
describe('Test Drivers Router', () => {
    beforeAll(async () => {
        const connection = await client.connect();
        if (connection) {
            app.connection = connection;
        }
    });
    
    test('Testing drivers route /drivers', async () => {
        const response = await supertest(app).get('/drivers');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(15);
        expect(response.body[1].team).toBeDefined();
        expect(response.body[2].permanentNumber).toBeDefined();
        expect(response.body[3].dateOfBirth).toBeDefined();
        expect(response.body[4].givenName).toBeDefined();
        expect(response.body[5].familyName).toBeDefined();
        expect(response.body[0].team.length).toBeTruthy();
        
    });
    test('Testing driver route /drivers/:id', async () => {
        const response = await supertest(app).get('/drivers/61caf84d337ba16b51e25b8d');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(false);
        expect(response.headers['content-type'].includes('application/json')).toBe(true);
        expect(response.body.team).toBeDefined();
        expect(response.body.permanentNumber).toBeDefined();
        expect(response.body.dateOfBirth).toBeDefined();
        expect(response.body.givenName).toBeDefined();
        expect(response.body.familyName).toBeDefined();
        expect(response.body.team.length).toBeTruthy();
        
        const wrongId = await supertest(app).get('/drivers/someWrongId');
        expect(wrongId.status).toBe(200);
        expect(wrongId.headers['content-type'].includes('application/json')).toBe(true);
        expect(wrongId.body.error.message).toBeTruthy();
        expect(wrongId.body.error.message).toBe('Could not get driver from db collection!!');
        expect(wrongId.body.error.hasOwnProperty('message')).toBe(true);
        expect(wrongId.body.hasOwnProperty('error')).toBe(true);
    });
    afterAll(async () => {
        await client.close();
    });
});

