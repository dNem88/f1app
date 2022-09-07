const mongodb = require('mongodb');

const client = new mongodb.MongoClient(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = (app) => {
    client.connect((err, db) => {
        if (err) {
            console.log('Failed to connect to database!');
        } 
        if (db) {
            console.log('Connected to MongoDB Atlas');
            app.locals.client = db;
            /*Keep a reference to the database in app.locals*/
            app.listen(process.env.PORT || 3020, console.log(`Server listens on port ${3020}`));
        }
    });
};