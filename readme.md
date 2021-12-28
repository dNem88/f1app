# Table of contents

* Title
* Description
* Technologies
* Dependencies
* Endpoints

# Title
F1 APP

# Description
    The F1 app is a project made for learning purposes. It's for
non-commercial use. It is created as a RESTful service, which
main purpose is to supply frontend applications with F1 data.

# Technologies
    - NodeJS / Express
    - Database: MongoDB (Atlas)

# Dependencies
    "axios": "^0.24.0",
    "bcrypt": "^5.0.1",
    "connect-mongo": "^4.6.0",
    "cors": "^2.8.5",
    "dotenv": "^10.0.0",
    "express": "^4.17.2",
    "express-session": "^1.17.2",
    "jsonwebtoken": "^8.5.1",
    "mongodb": "^4.2.2",
    "validator": "^13.7.0"

# Endpoints

## User authentication

### REGISTER USER

* Request type/url
```
POST  http://localhost:3020/users/register

body: { 
    username: 'user1',
    password: 'User458712',
    confirmPassword: 'User458712'.
    email: `user@email.com`
}
```    
* Response

`
{
    "acknowledged":true,
    "insertedId":"61cac725ee090162eabcfd18"
}
`
### LOGIN USER

* Request type/url
```
POST  http://localhost:3020/users/login

body: { 
    username: 'user1',
    password: 'User458712',
}
```    
* Response

`
{"_id":"someId",
"username":"user1",
"email":"user@gmail.com",
"authToken":"token should be send with all requests
in 'Authorization' HTTP Request-header"}
`


### LOGOUT USER

* Request type/url
```
POST  http://localhost:3020/users/logout

body: {},  Body is not required
```    
* Response

`
{"message":"You successfully logout"}
`
## FORMULA 1 DATA

### RACES SCHEDULE

* Request type/url
```
GET  http://localhost:3020/schedule

```    
* Response

Array of Objects containing circuit information, date, location

```
[
{
    "_id": "someId",
    "season": "2022",
    "round": "3",
    "Circuit": {
      "circuitId": "albert_park",
      "circuitName": "Albert Park Grand Prix Circuit",
      "Location": {
        "locality": "Melbourne",
        "country": "Australia"
      }
    },
    "date": "2022-04-10",
    "time": "05:10:00Z"
  }
]
```

### RACE DATA

* Request type/url
```
GET  http://localhost:3020/schedule/someId

```    
* Response

circuit information, date, location

```
[
{
    "_id": "someId",
    "season": "2022",
    "round": "3",
    "Circuit": {
      "circuitId": "albert_park",
      "circuitName": "Albert Park Grand Prix Circuit",
      "Location": {
        "locality": "Melbourne",
        "country": "Australia"
      }
    },
    "date": "2022-04-10",
    "time": "05:10:00Z"
  }
]
```

### DRIVERS CURRENT STANDINGS

* Request type/url
```
GET  http://localhost:3020/standings/drivers

```    
* Response

Array of Drivers objects

```
[
    {
    "position": "1",
    "points": "395.5",
    "wins": "10",
    "driver": "Max Verstappen",
    "nationality": "Dutch",
    "team": "Red Bull"
  }
]
```
### CONSTRUCTORS CURRENT STANDINGS

* Request type/url
```
GET  http://localhost:3020/standings/constructors

```    
* Response

Array of CONSTRUCTORS objects

```
[
    {
        "position": "1",
        "points": "613.5",
        "wins": "9",
        "constructor": "Mercedes",
        "nationality": "German"
    }
]
```

### DRIVERS

* Request type/url
```
GET  http://localhost:3020/drivers

```    
* Response

Array of DRIVERS objects

```
[
{
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
}
]
```

### DRIVER INFORMATION

* Request type/url
```
GET  http://localhost:3020/drivers/:id

```    
* Response

Object

```
{
    "_id": "61cafa96e22e8d9c021a38da08",
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
}

```