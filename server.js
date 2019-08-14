'use strict'
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8000
const auth  = require('./auth').auth

// PRIVATE and PUBLIC key
var privateKEY = fs.readFileSync('./keys/private.key', 'utf8');


const i = 'JDZL';          // Issuer 
const s = 'ggmortum@user.com';        // Subject 
const a = 'http://bit.in'; // Audience

const signOptions = {
    issuer: i,
    // subject: s,
    // audience: a,
    expiresIn: "12h",
    algorithm: "RS256"
};
var verifyOptions = {
    ...signOptions,
    algorithm: [signOptions.algorithm]
};
app.use(cors())
app.use(bodyParser.urlencoded({ // Middleware
    extended: true
}));
app.use(bodyParser.json( ))
app.get('/token', (req, res) => {

    const { user } = req.body
    console.log(req.body)
    const token = jwt.sign({ user }, privateKEY, signOptions);
    res.json(token)
})
app.get('/echo',auth, (req, res) => {

    console.log(req.headers['authorization'])
   
    res.json({legit:req.userId})
})
const server = app.listen(PORT, () => console.log(`Server running  on port: ${server.address().port}`))