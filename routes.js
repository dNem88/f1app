const router = require('express').Router();
const authController = require('./controllers/authController');
const homeController = require('./controllers/homeController');
const isAuthenticated = require('./middlewares/isAuthenticated');


router.use('/users', authController);
// router.use('/drivers', driversController);
// router.use('/constructors', constructorsController);
// router.use('/latest', latestNewsController);
// router.use('/standings', standingsController);
// router.use('/videos', videosController);
// router.use('/schedule', scheduleController);
router.use('/', isAuthenticated, homeController);


module.exports = router;