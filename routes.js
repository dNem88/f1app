const router = require('express').Router();
const authController = require('./controllers/authController');

router.get('/', async(req,res,next) => {
    console.log('homepage');
    const data = await req.app.locals.client.db('f1').collection('constructors').find().toArray();
    res.status(201)
        .send(data);
});

router.use('/users', authController);
// router.use('/drivers', driversController);
// router.use('/constructors', constructorsController);
// router.use('/latest', latestNewsController);
// router.use('/standings', standingsController);
// router.use('/videos', videosController);
// router.use('/schedule', scheduleController);



module.exports = router;