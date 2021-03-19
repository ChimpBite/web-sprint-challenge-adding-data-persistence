// build your `Resource` model here
const db = require('../../data/dbConfig');

function getAll() {
  return db('resources').select('*');
}

function findById(resource_id) {
  return db('resources')
    .select('resources.resource_name', 'resources.resource_description')
    .where('resources.resource_id', resource_id);
}

function create(resource) {
  return db('resources')
    .insert(resource)
    .then(([resource_id]) => findById(resource_id));
}

module.exports = {
  getAll,
  create,
};
