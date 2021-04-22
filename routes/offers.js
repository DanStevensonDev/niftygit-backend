const offersRouter = require('express').Router()
const {getOffers, postOffer} = require('../controllers/offers')

offersRouter.route('/')
    .get(getOffers)
    .post(postOffer)

module.exports = offersRouter