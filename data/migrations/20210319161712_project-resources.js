exports.up = function (knex) {
  return knex.schema.createTable('project_resources', (tbl) => {
    tbl.increments('project_resource_id').notNull();
    tbl
      .integer('project_id')
      .references('project_id')
      .inTable('projects')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    tbl
      .integer('resource_id')
      .references('resource_id')
      .inTable('resources')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('project_resources');
};
