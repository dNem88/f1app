
async function getNews(req) {
    try {
        let response = await req.app.locals.client.db('f1').collection('news').find().toArray();
        return response
    } catch(e) {
        return {error: {message: 'Could not get news from db!'}}
    }
}

async function updateNews(req) {
    try {
        let response = await req.app.locals.client.db('f1').collection('news').updateOne({type: 'news'}, {$set: {
            articles: req.body.articles
        }});
        return response
    } catch(e) {
        return {error: {message: 'Something is not right!'}}
    }
}

module.exports = {
    getNews,
    updateNews
}