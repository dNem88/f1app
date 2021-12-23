const router = require('express').Router();
const authController = require('./controllers/authController');
const homeController = require('./controllers/homeController');
const isAuthenticated = require('./middlewares/isAuthenticated');
const scheduleController = require('./controllers/scheduleController');
const standingsController = require('./controllers/standingsController');

router.use('/users', authController);
// router.use('/drivers', driversController);
// router.use('/constructors', constructorsController);
// router.use('/latest', latestNewsController);
router.use('/standings', standingsController);
// router.use('/videos', videosController);
router.use('/schedule', scheduleController);
// router.use('/', isAuthenticated, homeController);
router.use('/',  homeController);

module.exports = router;