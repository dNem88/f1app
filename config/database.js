const mongodb = require('mongodb');
const env = require('./env');


const client = new mongodb.MongoClient(env.development.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

client.connect((err, db) => {
    if (err) {
        throw {error: "Couldn't connect to MongoDB Cluster"};
    }
    if (db) {
        console.log('Connected to MongoDB Atlas...');
    }
});

const db = client.db('f1');
module.exports = db;