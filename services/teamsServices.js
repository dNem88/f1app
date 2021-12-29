const data = require('../data/teamsData');

async function getTeam(req, id) {
    try {
        return data.getTeam(req, id);
    } catch (error) {
        return {error: {message: "Could not get data from dataLayer!"}}
    }
}
async function getTeams(req, res) {
    try {
        return data.getTeams(req, res);
    } catch (error) {
        return {
            error: {
                message: "Could not get data from dataLayer!"
            }
        }
    }
}

module.exports = {
    getTeam,
    getTeams
}