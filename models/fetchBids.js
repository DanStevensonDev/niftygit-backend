const dbConnection = require('../db/dbConnection')

exports.fetchBids = (committer, ref) => {
    return dbConnection("commit_nft_bids")
        .select("*")
        .modify((querySoFar) => {
            if (committer !== undefined) {
                querySoFar
                    .select("*")
                    .where("commit_nft_bids.committer_username", committer)
            }

            if (ref !== undefined) {
                querySoFar
                    .select("*")
                    .where("commit_sha", ref)
            }
        })
        .returning("*")
}