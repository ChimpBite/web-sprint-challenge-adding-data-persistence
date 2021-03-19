exports.up = function (knex) {
  return knex.schema.createTable('projectresources', (tbl) => {
    tbl.increments('projectresource_id');
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
  return knex.schema.droptable('projectresources');
};
