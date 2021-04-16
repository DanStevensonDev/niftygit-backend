const {fetchBids} = require('../models/fetchBids')

exports.getBids = (req, res, next) => {
    const {committer} = req.query
    fetchBids(committer).then((bids) => {
        res.status(200).send(bids)
    })
}