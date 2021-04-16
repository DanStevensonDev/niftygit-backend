const apiRouter = require('express').Router()
const bidsRouter = require('./bidsRouter')

apiRouter.use('/bids', bidsRouter)

module.exports = apiRouter