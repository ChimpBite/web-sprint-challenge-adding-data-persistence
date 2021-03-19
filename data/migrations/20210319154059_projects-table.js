exports.up = function (knex) {
  return knex.schema.createTable('projects', (tbl) => {
    tbl.increments('project_id');
    tbl.string('project_name', 128).notNull();
    tbl.text('project_description');
    tbl.boolean('project_completed').notNull().defaultTo(false);
  });
};

exports.down = function (knex) {
  return knex.schema.droptable('projects');
};
