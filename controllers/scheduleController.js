const router = require('express').Router();
const services = require('../services/scheduleServices');

router.get("/", services.fullSchedule);
router.get('/:id', services.raceSchedule);

module.exports = router;