// build your `Project` model here
const db = require('../../data/dbConfig');

const getAll = async () => {
  try {
    const project = await db('projects');
    return project.map((project) =>
      project.project_completed === 0
        ? { ...project, project_completed: false }
        : { ...project, project_completed: true }
    );
  } catch (err) {
    console.log(err);
  }
};

const findById = async (project_id) => {
  try {
    const project = await db('projects')
      .where({ project_id: project_id })
      .first();
    return {
      ...project,
      project_completed: project.project_completed === 0 ? false : true,
    };
  } catch (err) {
    console.log(err);
  }
};

const create = async (project) => {
  try {
    const newProject = await db('projects').insert(project);
    return findById(newProject[0]);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
  create,
};
