exports.up = function (knex) {
  return knex.schema.createTable('tasks', (tbl) => {
    tbl.increments('task_id').notNull();
    tbl.text('task_description').notNull();
    tbl.text('task_notes');
    tbl.boolean('task_completed').notNull().defaultTo(0);
    tbl
      .integer('project_id')
      .references('project_id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('tasks');
};
