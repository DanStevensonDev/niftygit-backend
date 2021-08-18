const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const app = express()

app.use(cors())
app.use(express.json())
app.use(helmet())

const apiRouter = require('./routes/api.js')

app.use('/api', apiRouter)

module.exports = app