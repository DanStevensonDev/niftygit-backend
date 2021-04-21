const { commitNftOffersData } = require("../data/index.js")

exports.seed = function (knex) {
    return knex.migrate
        .rollback()
        .then(() => knex.migrate.latest())
        .then(() => {
            return knex
                .insert(commitNftOffersData)
                .into("commit_nft_offers")
                .returning("*")
        })
}