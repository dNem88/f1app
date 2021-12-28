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

### User authentication

#### Register user

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