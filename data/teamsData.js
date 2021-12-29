const ObjectId = require('mongodb').ObjectId;

async function getTeam(req, id) {
    try {
        return req.app.locals.client.db('f1').collection('constructors').findOne({_id: ObjectId(id)});
    } catch (error) {
        return {
            error: {
                message: "Could not get data from DB!"
            }
        }
    }
}
async function getTeams(req, res) {
    try {
        return req.app.locals.client.db('f1').collection('constructors').find().toArray();
    } catch (error) {
        return {
            error: {
                message: "Could not get data from DB!"
            }
        }
    }
}
module.exports = {
    getTeam,
    getTeams
}