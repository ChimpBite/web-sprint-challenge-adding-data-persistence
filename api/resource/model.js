// build your `Resource` model here
const db = require('../../data/db-config');

function getAllResources() {
  return db('resources');
}
