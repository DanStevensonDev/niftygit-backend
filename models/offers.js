const dbConnection = require('../db/dbConnection')

exports.fetchOffers = (committer, ref) => {
    return dbConnection("commit_nft_offers")
        .select("*")
        .modify((querySoFar) => {
            if (committer !== undefined) {
                querySoFar
                    .select("*")
                    .where("commit_nft_offers.committerUsername", committer)
            }

            if (ref !== undefined) {
                querySoFar
                    .select("*")
                    .where("commit_sha", ref)
            }
        })
        .returning("*")
}

exports.sendOffer = (offerData) => {
    return dbConnection("commit_nft_offers")
        .insert(offerData)
        .returning("*")
}