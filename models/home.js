const data = {
    user: {
        register: {
            module: "USER AUTHENTICATION",
            title: "REGISTER USER",
            method: "POST",
            url: "https://boiling-brushlands-51072.herokuapp.com/users/register",
            body: {
                username: 'user1',
                password: 'User458712',
                confirmPassword: 'User458712',
                email: `user@email.com`
            },
            response: {
                acknowledged: true,
                insertedId: "61cac725ee090162eabcfd18"
            }
        },
        login: {
            module: "USER AUTHENTICATION",
            title: "LOGIN USER",
            method: "POST",
            url: "https://boiling-brushlands-51072.herokuapp.com/users/login",
            body: {
                username: 'user1',
                password: 'User458712',
            },
            response: {
                    _id: "someId",
                    username: "user1",
                    email: "user@gmail.com",
                    authToken: "token should be send with all requests in 'Authorization' HTTP Request - header "}
        },
        logout: {
            module: "USER AUTHENTICATION",
            title: "LOGOUT USER",
            method: "POST",
            url: "https://boiling-brushlands-51072.herokuapp.com/users/logout",
            body: {
               
            },
            response: {
                message: "You successfully logout"
            }
        }
    },
    formula: {
            schedule: {
                module: "f1",
                title: "RACE SCHEDULE",
                method: "GET",
                url: "https://boiling-brushlands-51072.herokuapp.com/schedule",
                response: {
                    "_id": "someId",
                    season: "2022",
                    round: "3",
                    Circuit: {
                        circuitId: "albert_park",
                        circuitName: "Albert Park Grand Prix Circuit",
                        Location: {
                            locality: "Melbourne",
                            country: "Australia"
                        }
                    },
                    date: "2022-04-10",
                    time: "05:10:00Z"
                },
                comment: "Array of Objects containing circuit information, date, location"
            },
            circuit: {
                module: "f1",
                title: "CIRCUIT DATA",
                method: "GET",
                url: "https://boiling-brushlands-51072.herokuapp.com/schedule/:circuitId",
                response: {
                    "_id": "61bf42fffeab6a926247b6d8",
                    "season": "2022",
                    "round": "1",
                    "url": "https://en.wikipedia.org/wiki/2022_Bahrain_Grand_Prix",
                    "raceName": "Bahrain Grand Prix",
                    "Circuit": {
                        "circuitId": "bahrain",
                        "url": "http://en.wikipedia.org/wiki/Bahrain_International_Circuit",
                        "circuitName": "Bahrain International Circuit",
                        "Location": {
                            "lat": "26.0325",
                            "long": "50.5106",
                            "locality": "Sakhir",
                            "country": "Bahrain"
                        }
                    },
                    "date": "2022-03-20",
                    "time": "15:00:00Z"
                },
                comment: "circuit information, date, location"
            },
            driverStandings: {
                    module: "f1",
                    title: "DRIVERS STANDINGS",
                    method: "GET",
                    url: "https://boiling-brushlands-51072.herokuapp.com/drivers/standings",
                    response: {
                        "position": "1",
                        "points": "395.5",
                        "wins": "10",
                        "driver": "Max Verstappen",
                        "nationality": "Dutch",
                        "team": "Red Bull"
                    },
                    comment: "Array of drivers objects"
            },
            constructorStandings: {
                module: "f1",
                title: "CONSTRUCTORS STANDINGS",
                method: "GET",
                url: "https://boiling-brushlands-51072.herokuapp.com/constructors/standings",
                response: {
                    "position": "1",
                    "points": "613.5",
                    "wins": "9",
                    "constructor": "Mercedes",
                    "nationality": "German"
                },
                comment: "Array of constructors objects"
            },
            drivers: {
                module: "f1",
                title: "F1 DRIVERS",
                method: "GET",
                url: "https://boiling-brushlands-51072.herokuapp.com/drivers",
                response: {
                    "_id": "61cafa96e22e8aad9c021a3808",
                    "permanentNumber": "11",
                    "code": "PER",
                    "givenName": "Sergio",
                    "familyName": "Perez",
                    "dateOfBirth": "1990-26-01",
                    "country": "Mexico",
                    "team": "Red Bull Racing",
                    "stats": {
                        "gp": 214,
                        "champion": 0,
                        "podiums": 15,
                        "highestFinish": 1,
                        "wins": 2
                    }
                },
                comment: "Array of driver objects"
            },
            driverInfo: {
                module: "f1",
                title: "DRIVER INFORMATION",
                method: "GET",
                url: "https://boiling-brushlands-51072.herokuapp.com/drivers/:driverId",
                response: {
                    "_id": "61cafa96e22e8aad9c021a3808",
                    "permanentNumber": "11",
                    "code": "PER",
                    "givenName": "Sergio",
                    "familyName": "Perez",
                    "dateOfBirth": "1990-26-01",
                    "country": "Mexico",
                    "team": "Red Bull Racing",
                    "stats": {
                        "gp": 214,
                        "champion": 0,
                        "podiums": 15,
                        "highestFinish": 1,
                        "wins": 2
                    }
                },
                comment: "Driver information"
            },
            teams: {
                module: "f1",
                title: "F1 TEAMS",
                method: "GET",
                url: "https://boiling-brushlands-51072.herokuapp.com/teams",
                response: {
                    "_id": "61cc2aa164e7999bae8c4b1885",
                    "name": "Mercedes-AMG Petronas F1 Team",
                    "base": "Brackley, UK",
                    "teamChief": "Toto Wolf",
                    "technicalChief": "Mike Elliott",
                    "chasis": "W12",
                    "powerUnit": "Mercedes",
                    "firstTeamEntry": 1970,
                    "championships": 8,
                    "highestRaceFinnish": 1,
                    "wins": 115,
                    "poles": 127,
                    "fastestLaps": 85
                },
                comment: "Array of F1 Teams Objects"
            },
            teamInfo: {
                module: "f1",
                title: "TEAM INFORMATION",
                method: "GET",
                url: "https://boiling-brushlands-51072.herokuapp.com/teams/:teamId",
                response: {
                    "_id": "61cc2aa164e7999bae8c4b1885",
                    "name": "Mercedes-AMG Petronas F1 Team",
                    "base": "Brackley, UK",
                    "teamChief": "Toto Wolf",
                    "technicalChief": "Mike Elliott",
                    "chasis": "W12",
                    "powerUnit": "Mercedes",
                    "firstTeamEntry": 1970,
                    "championships": 8,
                    "highestRaceFinnish": 1,
                    "wins": 115,
                    "poles": 127,
                    "fastestLaps": 85
                },
                comment: "Team information"
            },
    }
            
}

module.exports = data;