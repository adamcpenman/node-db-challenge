exports.seed = async (knex) => {
    await knex("resources").insert([
        {name: "Xavier Institute for Higher Learning"},
        {name: "JEAN GREY"},
        {name: "STORM"}
    ])
}