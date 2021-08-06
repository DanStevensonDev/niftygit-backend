const dbConnection = require('../db/dbConnection')

exports.fetchOffers = (committer, sha) => {
    return dbConnection("commit_nft_offers")
        .select("*")
        .modify((querySoFar) => {
            if (committer !== undefined) {
                querySoFar
                    .select("*")
                    .where("commit_nft_offers.committerUsername", committer)
            }

            if (sha !== undefined) {
                querySoFar
                    .select("*")
                    .where("commit_nft_offers.commitData.sha", sha)
            }
        })
        .returning("*")
}

exports.sendOffer = (offerData) => {
    return dbConnection("commit_nft_offers")
        .insert(offerData)
        .returning("*")
}

exports.changeOfferStatus = (offerId, offerStatus) => {
    return dbConnection("commit_nft_offers")
        .select("*")
        .where("offerId", offerId)
        .update("offerStatus", offerStatus)
        .returning("*")
}