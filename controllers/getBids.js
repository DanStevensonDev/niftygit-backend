const {fetchBids} = require('../models/fetchBids')

exports.getBids = (req, res, next) => {
    const {committer, ref} = req.query
    fetchBids(committer, ref).then((bids) => {
        res.status(200).send(bids)
    })
}