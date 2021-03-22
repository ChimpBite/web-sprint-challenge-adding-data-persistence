exports.up = function (knex) {
  return knex.schema.createTable('resources', (tbl) => {
    tbl.increments('resource_id').notNull();
    tbl.string('resource_name', 128).notNull().unique();
    tbl.text('resource_description');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('resources');
};
