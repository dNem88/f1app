const ObjectId = require('mongodb').ObjectId;

async function getAll(req) {
    try {
        return await req.app.locals.client.db('f1').collection('schedule').find().sort({date: 1}).toArray();
    } catch (e) {
        return {error: {message: 'Could not get data from Schedule collection!'}};
    }
}
async function getScheduleById(req, id) {
    try {
        return await req.app.locals.client.db('f1').collection('schedule').findOne({_id: ObjectId});
    } catch (e) {
        return {
            error: {
                message: 'Could not get race-schedule from Schedule collection!'
            }
        }
    }
}
module.exports = {
    getAll,
    getScheduleById
}