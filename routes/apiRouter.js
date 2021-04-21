const apiRouter = require('express').Router()
const offersRouter = require('./offersRouter')

apiRouter.use('/offers', offersRouter)

module.exports = apiRouter