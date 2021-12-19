const router = require('express').Router();
const authController = require('./controllers/authController');

router.get('/', async(req,res,next) => {
    console.log('homepage');
    const data = await req.app.locals.client.db('f1').collection('constructors').find().toArray();
    res.status(201)
        .send(data);
});

router.use('/users', authController);
// router.get('/drivers', driversController);
// router.get('/constructors', constructorsController);
// router.get('/latest', latestNewsController);
// router.get('/standings', standingsController);
// router.get('/videos', videosController);
// router.get('/schedule', scheduleController);



module.exports = router;