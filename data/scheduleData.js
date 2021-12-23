const ObjectId = require('mongodb').ObjectId;

async function getAll(req) {
    let year = new Date().getFullYear();
    const month = new Date().getMonth();
    if (month >= 11) {
        year += 1;
    }
    try {
        return await req.app.locals.client.db('f1').collection('schedule').find({"season": year.toString()}).sort({date: 1}).toArray();
    } catch (e) {
        return {error: {message: 'Could not get data from Schedule collection!'}};
    }
}
async function getScheduleById(req, id) {
    try {
        return await req.app.locals.client.db('f1').collection('schedule').findOne({_id: ObjectId(id)});
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