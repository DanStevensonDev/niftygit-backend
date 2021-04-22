const apiRouter = require('express').Router()
const offersRouter = require('./offers')

apiRouter.use('/offers', offersRouter)

module.exports = apiRouter