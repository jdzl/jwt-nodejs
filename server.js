'use strict'
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser')
const logger = require('morgan');
const { inspections2, survey } = require('./dataMock')
const auth = require('./auth').auth

const app = express()
const PORT = process.env.PORT || 8000

// PRIVATE and PUBLIC key
let privateKEY = fs.readFileSync('./keys/private.key', 'utf8');


const i = 'JDZL';          // Issuer 
const s = 'ggmortum@user.com';        // Subject 
const a = 'http://bit.in'; // Audience

const signOptions = {
    issuer: i,
    // subject: s,
    // audience: a,
    expiresIn: "30s",
    // expiresIn: "12h",
    algorithm: "RS256"
};
let verifyOptions = {
    ...signOptions,
    algorithm: [signOptions.algorithm]
};
app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.urlencoded({ // Middleware
    extended: true
}));
app.use(bodyParser.json())
app.post('/login', (req, res) => {

    const { user } = req.body
    console.log(req.body)
    const token = jwt.sign({ user }, privateKEY, signOptions);
    res.json({ token, id: user === 'zlda' ? 1 : 2 })
})
app.get('/echo', auth, (req, res) => {

    console.log(req.headers['authorization'])

    res.json({ legit: req.userId })
})
app.get('/users/:userId/inspections', auth, (req, res) => {

    console.log(req.params.userId, "req.params.userId")
    res.json({
        response: inspections2(req.params.userId)
    })
})
app.get('/survey/:id', auth, (req, res) => {

    console.log(req.params.id, "req.params.id")

    res.json(survey(req.params.id))
})
app.get('/', (req, res) => res.json({ res: 'API users working...' }))

const server = app.listen(PORT, () => console.log(`Server running  on port: ${server.address().port}`))