exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {
          project_name: 'CodeCrack',
          project_description: 'React/Redux Match Game',
          project_completed: false,
        },
        {
          project_name: 'ACARS',
          project_description: 'Electron/Javascript ACARS for MSFS 2020',
          project_completed: false,
        },
        {
          project_name: 'Chat App',
          project_description: 'Electron/Javascript Chat App',
          project_completed: false,
        },
      ]);
    });
};
