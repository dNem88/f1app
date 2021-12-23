const axios = require('axios');

async function getDriversStandings(req,res,next) {
    let url = "http://ergast.com/api/f1/current/driverStandings.json";
    try {
        const response = await axios.get(url);
        const data = (Object.values(response.data))[0].StandingsTable.StandingsLists[0];
        return data;
    } catch (e) {
        return {
            error: {
                message: 'Could not get Drivers Standings from ergast api!'
            }
        };
    }
}
async function getConstructorsStandings(req, res, next) {
    let url = "http://ergast.com/api/f1/current/constructorStandings.json";
    try {
        const response = await axios.get(url);
        const data = (Object.values(response.data))[0].StandingsTable.StandingsLists[0];
        return data;
    } catch (e) {
        return {
            error: {
                message: 'Could not get Drivers Standings from ergast api!'
            }
        };
    }
}


module.exports = {
    getDriversStandings,
    getConstructorsStandings

}