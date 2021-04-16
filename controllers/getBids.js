const {fetchBids} = require('../models/fetchBids')

exports.getBids = (req, res, next) => {
    fetchBids().then((bids) => {
        res.status(200).send(bids)
    })
}