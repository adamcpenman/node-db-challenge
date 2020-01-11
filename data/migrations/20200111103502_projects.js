
exports.up = async function(knex) {
  await knex.schema.createTable("projects", (table) => {
      //unique id
      table.increments("id")
      //name of project
      table.string("project_name").notNullable()
      //boolean to indicate if project has been completed
      table.boolean("completed").notNullable().defaultTo(false)
    })
   await knex.scheme.createTable("resources", (table) => {
       table.increments("id")
       table.string("name").notNullable().unique()
       table.boolean("completed").notNullable.defaultTo(false)
   })
   await knex.schema.createTable("tasks", (table) => {
       table.increments("id")
       table.string("description").notNullable()
       table.boolean("completed").notNullable.defaultTo(false)
       table.integer("project_id")
            .notNullable()
            .unsigned()
            .references("id")
            .inTable("projects")
            .onDelete("CASCADE")
            .onUpdate("CASCADE")
   })
   await knex.schema.createTable("pr_re", (table) => {
       table.increments()
       table.interger("project_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("projects")
       table.interger("resource_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("resources")
            
   })
};

exports.down = function(knex) {
    await knex.schema.dropTableIfExits("pr_re")
    await knex.schema.dropTableIfExits("tasks")
    await knex.schema.dropTableIfExits("resources")
    await knex.schema.dropTableIfExits("projects")
};
