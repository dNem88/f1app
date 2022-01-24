const router = require('express').Router();
const authController = require('./controllers/authController');
const homeController = require('./controllers/homeController');
const isAuthenticated = require('./middlewares/isAuthorized');
const scheduleController = require('./controllers/scheduleController');
const standingsController = require('./controllers/standingsController');
const driversController = require('./controllers/driversController');
const teamsController = require('./controllers/teamsController');

router.use('/users', authController);
router.use('/standings', standingsController);
router.use('/schedule', scheduleController);
router.use('/drivers', driversController);
router.use('/teams', teamsController);
// router.use('/latest', latestNewsController);
// router.use('/videos', videosController);
// router.use('/', isAuthenticated, homeController);
router.use('/',  homeController);

module.exports = router;