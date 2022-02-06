const newsRouter = require('express').Router()
const {getNews, updateNews} = require('../services/newsServices')

newsRouter.get('/', async(req,res,next) => {
    try {
        const response = await getNews(req,res,next);
        res.status(200).json(response)
    } catch(e) {
        res.status(400).json({error: {message: 'Could not get the required data from f1api'}})
    }
})
newsRouter.put('/', async(req,res,next) => {
    try {
        const response = await updateNews(req,res,next);
        console.log(response)
        res.status(200).json(response)
    } catch(e) {
        res.status(400).json({error: {message: 'Could not get the required data from f1api'}})
    }
})

module.exports = newsRouter;