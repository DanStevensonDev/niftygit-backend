const {fetchOffers} = require('../models/fetchOffers')

exports.getOffers = (req, res, next) => {
    const {committer, ref} = req.query
    fetchOffers(committer, ref).then((offers) => {
        res.status(200).send(offers)
    })
}