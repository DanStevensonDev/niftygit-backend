const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

const apiRouter = require('./routes/apiRouter.js')

app.use('/api', apiRouter)

module.exports = app