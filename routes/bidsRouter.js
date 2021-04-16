const bidsRouter = require('express').Router()
const {getBids} = require('../controllers/getBids')

bidsRouter.route('/')
    .get(getBids)

module.exports = bidsRouter