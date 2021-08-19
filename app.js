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
  const {secure, protocol, headers} = req

  if (req.authorization !== REACT_APP_HEADER_AUTH) {
    return res.status(401).json({ error: 'Forbidden (unauthorized)', info: {secure, protocol, headers} });
  }

  if (!req.protocol === "https") {
    return res.status(401).json({ error: 'Forbidden (unauthorized)', info: {secure, protocol, headers} });
  }

  const debugInfo = {
    secure: secure,
    protocol: protocol,
    headers: headers
  }

  console.log(debugInfo)

  next();
})

const apiRouter = require('./routes/api.js')

app.use('/api', apiRouter)

module.exports = app