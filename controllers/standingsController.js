const router = require('express').Router();
const standingsServices = require('../services/standingsServices');

router.get('/drivers', async(req,res,next) => {
    try {
        let standings = await standingsServices.getDriversStandings();
        res.status(200).json(standings);
    } catch(e){
        res.status(404).json({error: {message: 'Could not get data from ergast api'}});
    }

});

router.get('/constructors', async (req, res, next) => {
    try {
        let standings = await standingsServices.getConstructorsStandings();
        res.status(200).json(standings);
    } catch (e) {
        res.status(404).json({
            error: {
                message: 'Could not get data from ergast api'
            }
        });
    }

});

module.exports = router;