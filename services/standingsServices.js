const dataStanding = require('../data/standingsData');

async function getDriversStandings() {
    try {
        const standings = await dataStanding.getDriversStandings();
        const formatted = formatDriversStandings(standings);
        return formatted;
    } catch (error) {
        return {error: "Could not get current F1 Drivers Standings"};
    }
}

async function getConstructorsStandings() {
    try {
        const standings = await dataStanding.getConstructorsStandings();
        const formatted = formatConstructorStandings(standings);
        return formatted;
    } catch (error) {
        return {
            error: "Could not get current F1 Constructors Standings"
        };
    }
}

function formatDriversStandings(standings) {
    let formatted = standings.DriverStandings.map(x => {
        let data = {
            position: x.position,
            points: x.points,
            wins: x.wins,
            driver: `${x.Driver.givenName} ${x.Driver.familyName}`,
            nationality: `${x.Driver.nationality}`,
            team: `${x.Constructors[0].name}`,
        };
        return data;
    });
    return formatted;
}
function formatConstructorStandings(standings) {
    let formatted = standings.ConstructorStandings.map(x => {
        let data = {
            position: x.position,
            points: x.points,
            wins: x.wins,
            constructor: x.Constructor.name,
            nationality: x.Constructor.nationality,
        };
        return data;
    });
    return formatted;
}
module.exports = {
    getDriversStandings,
    getConstructorsStandings
};