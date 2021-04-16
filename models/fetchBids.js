const dbConnection = require('../db/dbConnection')

exports.fetchBids = () => {
    return dbConnection("commit_nft_bids")
        .select("*")
        .returning("*")
}