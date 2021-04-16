const dbConnection = require('../db/dbConnection')

exports.fetchBids = (committer) => {
    return dbConnection("commit_nft_bids")
        .select("*")
        .where("commit_nft_bids.committer_username", committer)
        .returning("*")
}