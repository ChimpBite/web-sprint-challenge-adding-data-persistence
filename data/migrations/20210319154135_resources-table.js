exports.up = function (knex) {
  return knex.schema.createTable('resources', (tbl) => {
    tbl.increments('resource_id').notNull();
    tbl.text('resource_name').notNull().unique();
    tbl.text('resource_description');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('resources');
};
