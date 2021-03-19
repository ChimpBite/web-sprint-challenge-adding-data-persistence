// build your `Resource` model here
const db = require('../../data/dbConfig');

const getAll = async () => {
  try {
    return await db('resources').select('*');
  } catch (err) {
    console.log(err);
  }
};

const findById = async (resource_id) => {
  try {
    return await db('resources')
      .select(
        'resources.resource_id',
        'resources.resource_name',
        'resources.resource_description'
      )
      .where('resources.resource_id', resource_id);
  } catch (err) {
    console.log(err);
  }
};

const create = async (resource) => {
  try {
    return await db('resources')
      .insert(resource)
      .then(([resource_id]) => findById(resource_id));
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
  create,
};
