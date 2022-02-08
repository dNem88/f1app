const videoRouter = require('express').Router()
const {getVideos, getVideoById} = require('../services/videoSevces')

videoRouter.get('/', async(req,res,next) => {
    try {
        let videos = await getVideos(req,res,next)
        res.status(200).json(videos)
    } catch(e) {
        res.status(400).json({error: {message: 'Could not get required videos'}})
    }
})

videoRouter.get('/:id', async(req, res, next) => {
    const id = req.params.id
    try{
        let video = await getVideoById(req, id)
         res.status(200).json(video)
    } catch(e) {
        res.status(400).json({error: {message: 'Could not get required video'}})
    }
})

module.exports = videoRouter