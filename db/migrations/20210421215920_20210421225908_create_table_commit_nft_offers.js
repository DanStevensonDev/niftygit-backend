
exports.up = function (knex) {
    console.log("creating table...")
    return knex.schema.createTable("commit_nft_offers", commitNftOffersTable => {
        commitNftOffersTable.increments("offerId").primary()
        commitNftOffersTable.string("committerUsername").notNullable()
        commitNftOffersTable.json("commitData").notNullable()
        commitNftOffersTable.float("offerAmountInEth").notNullable()
        commitNftOffersTable.bigInteger("transactionTime").notNullable()
        commitNftOffersTable.string("transactionHash").notNullable()
        commitNftOffersTable.string("supporterAccountAddress").notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("commit_nft_offers")
};