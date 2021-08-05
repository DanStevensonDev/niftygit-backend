const offersRouter = require('express').Router()
const {getOffers, postOffer, patchOffer} = require('../controllers/offers')

offersRouter.route('/')
    .get(getOffers)
    .post(postOffer)
    .patch(patchOffer)

module.exports = offersRouter