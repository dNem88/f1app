const router = require('express').Router();
const services = require('../services/teamsServices');

router.get('/', async(req,res,next) => {
    try {
        let teams = await services.getTeams(req,res);
        res.status(200).json(teams);
    } catch(e) {
        res.status(400).json({error: {message: "Could not get teams from db!"}});
    }
});
router.get('/:id', async(req,res,next) => {
    try {
        let team = await services.getTeam(req, req.params.id);
        res.status(200).json(team);
    } catch (e) {
        res.status(400).json({
            error: {
                message: "Could not get team from db!"
            }
        });
    }
}); 


module.exports = router;