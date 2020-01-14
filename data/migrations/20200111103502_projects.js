
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
      //unique id
      table.increments("id")
      //name of project
      table.string("project_name").notNullable()
      //boolean to indicate if project has been completed
      table.boolean("completed").notNullable().defaultTo(false)
    })
   await knex.schema.createTable("resources", (table) => {
       table.increments("id")
       table.string("name").notNullable().unique()
       table.boolean("completed").notNullable().defaultTo(false)
   })
   await knex.schema.createTable("tasks", (table) => {
       table.increments()
    //    table.integer("task_number").unsigned().notNullable()
       table.string("description").notNullable()
       table.boolean("completed").notNullable().defaultTo(false)
       table.integer("project_id")
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
   })
   await knex.schema.createTable("pr_re", (table) => {
    //    table.increments("id")
       table.integer("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
       table.integer("resource_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("resources")
       table.primary(["project_id", "resource_id"])    
            
   })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("pr_re")
    await knex.schema.dropTableIfExists("tasks")
    await knex.schema.dropTableIfExists("resources")
    await knex.schema.dropTableIfExists("projects")
};
