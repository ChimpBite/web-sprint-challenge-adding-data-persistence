// build your `Project` model here
const db = require('../../data/dbConfig');

function getAll() {
  return db('projects').select(
    'projects.project_id',
    'projects.project_name',
    'projects.project_description',
    'projects.project_completed'
  );
}

function findById(project_id) {
  return db('projects')
    .select(
      'projects.project_id',
      'projects.project_name',
      'projects.project_description',
      'projects.project_completed'
    )
    .where('projects.project_id', project_id);
}

function create(project) {
  return db('projects')
    .insert(project)
    .then(([project_id]) => findById(project_id));
}

module.exports = {
  getAll,
  create,
};
