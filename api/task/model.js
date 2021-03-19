// build your `Task` model here
const db = require('../../data/dbConfig');

const getAll = async () => {
  try {
    const task = await db('tasks as t')
      .join('projects as p', 't.project_id', 'p.project_id')
      .select(
        't.task_id',
        't.task_description',
        't.task_notes',
        't.task_completed',
        'p.project_name',
        'p.project_description'
      );
    return task.map((task) =>
      task.task_completed === 0
        ? { ...task, task_completed: false }
        : { ...task, task_completed: true }
    );
  } catch (err) {
    console.log(err);
  }
};

const findById = async (task_id) => {
  try {
    const task = await db('tasks').where({ task_id: task_id }).first();
    return {
      ...task,
      task_completed: task.task_completed === 0 ? false : true,
    };
  } catch (err) {
    console.log(err);
  }
};

const create = async (task) => {
  try {
    const newtask = await db('tasks').insert(task);
    return findById(newtask[0]);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
  create,
};
