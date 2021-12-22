const scheduleData = require('../data/scheduleData');

async function fullSchedule(req, res, next) {
    try {
        const schedule = await scheduleData.getAll(req);
        res.status(200).json(schedule);
    } catch(err) {
        res.status(400).json({
            error: {
                messsage: 'Could not get F1 schedule fo some reason!'
            }
        });
    }
}
async function raceSchedule(req, res, next) {
    try {
        const raceSchedule = await scheduleData.getScheduleById(req, req.params.id);
        res.status(200).json(raceSchedule);
    } catch(e) {
        res.status(400).json({error: {message: 'Could not get data for this race'}});
    }
}
module.exports = {
    fullSchedule,
    raceSchedule
}