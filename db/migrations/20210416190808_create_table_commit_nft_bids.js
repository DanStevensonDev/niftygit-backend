
exports.up = function (knex) {
    console.log("creating table...")
    return knex.schema.createTable("commit_nft_bids", commitNftBidsTable => {
        commitNftBidsTable.increments("offerId").primary()
        commitNftBidsTable.string("committerUsername").notNullable()
        commitNftBidsTable.string("committerData").notNullable()
        commitNftBidsTable.float("offerAmountInEth").notNullable()
        commitNftBidsTable.bigInteger("transactionTime").notNullable()
        commitNftBidsTable.string("transactionHash").notNullable()
        commitNftBidsTable.string("supporterAccountAddress").notNullable()
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable("commit_nft_bids")
};
