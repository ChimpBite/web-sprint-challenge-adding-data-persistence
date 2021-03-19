exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {
          task_description: 'Set up react store',
          task_notes: 'required to store values',
          task_completed: 0,
          project_id: 1,
        },
        {
          task_description: 'Get msfs sdk node connecting',
          task_notes: '',
          task_completed: 0,
          project_id: 2,
        },
        {
          task_description: 'Find testers',
          task_notes: '',
          task_completed: 0,
          project_id: 3,
        },
      ]);
    });
};
