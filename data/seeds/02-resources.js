exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {
          resource_name: 'VSCODE',
          resource_description: '',
        },
        {
          resource_name: 'MSFS 2020 SDK',
          resource_description: 'Microsoft Flight Simulater 2020 SDK',
        },
        {
          resource_name: 'Testers',
          resource_description: 'Human beta testers',
        },
        {
          resource_name: 'Electron',
          resource_description: '',
        },
        {
          resource_name: 'legal copy of msfs',
          resource_description: '',
        },
      ]);
    });
};
