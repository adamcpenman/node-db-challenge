exports.seed = async (knex) => {
    await knex("projects").insert([
        {project_name: "PROJECT LOGAN"},
        {project_name: "PROJECT X"},
        {project_name: "PROJECT ROUGE"}
    ])
}