const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(helmet())

const { REACT_APP_HEADER_AUTH } = process.env

app.use(function (req, res, next) {
    const {authorization, host} = req.headers
    if (authorization !== REACT_APP_HEADER_AUTH || !req.secure) {
        return res.status(403).json({ error: 'Forbidden' });
    }
  next();
})

const apiRouter = require('./routes/api.js')

app.use('/api', apiRouter)

module.exports = app