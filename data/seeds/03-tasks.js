exports.seed = async (knex) => {
    await knex("tasks").insert([
        {description: "Learn to control abilities", project_id: 1},
        {description: "Find more weird and unusuals", project_id: 3},
        {description: "Finish Book 'Mutants: CLASSIFIED' ", project_id: 2}
    ])
}