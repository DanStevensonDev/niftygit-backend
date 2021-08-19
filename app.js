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
  const { secure, protocol, headers, hostname } = req

  if (headers.authorization !== REACT_APP_HEADER_AUTH) {
    return res.status(401).send({ error: 'Unauthorized', info: {secure, protocol, headers, hostname } });
  }

  next();
})

const apiRouter = require('./routes/api.js')

app.use('/api', apiRouter)

module.exports = app