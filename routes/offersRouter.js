const offersRouter = require('express').Router()
const {getOffers} = require('../controllers/getOffers')

offersRouter.route('/')
    .get(getOffers)

module.exports = offersRouter