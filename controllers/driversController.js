const router = require('express').Router();
const services = require('../services/driversServices');

router.get('/', async(req,res,next) => {
    try {
        const drivers = await services.getAllDrivers(req, res, next);
        res.status(200).json(drivers);
    } catch (e){
        res.status(400).json({error: {message: 'Error while getting drivers'}})
    }
});
router.get('/:id', async (req, res, next) => {
    try {
        const driver = await services.getDriverById(req, res, next);
        res.status(200).json(driver);
    } catch(e) {
        res.status(400).json({
            error: {
                message: 'Error while getting current driver'
            }
        })
    }
    
});

module.exports = router;