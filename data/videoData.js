const ObjectId = require('mongodb').ObjectId

async function getVideos(req) {
    let count = Number(req.query.count) || 10;
    try{
        let response = await req.app.locals.client
            .db('f1')
            .collection('videos')
            .find()
            .limit(count)
            .toArray();
        return response;
    }catch(e) {
        return {error: {message: 'Failed to get videos from database'}}
    }
   
}

async function getVideoById(req, id) {
     try {
         let response = await req.app.locals.client
             .db('f1')
             .collection('videos')
             .findOne({_id: ObjectId(id)})
         return response;
     } catch (e) {
         return {
             error: {
                 message: 'Failed to get video from database'
             }
         }
     }
}

module.exports = {getVideos, getVideoById}