const {fetchOffers, sendOffer} = require('../models/offers')

exports.getOffers = (req, res, next) => {
    const {committer, ref} = req.query
    fetchOffers(committer, ref).then((offers) => {
        res.status(200).send(offers)
    })
}

exports.postOffer = (req, res, next) => {
    const offerData = req.body

    sendOffer(offerData).then((data) => {
        res.status(200).send(data)
    }).catch((err) => {
        return err
    })
}