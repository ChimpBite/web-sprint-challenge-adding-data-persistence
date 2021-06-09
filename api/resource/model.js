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
    const resource = await db('resources')
      .select('resources.resource_name')
      .where({ resource_id: resource_id })
      .first();
    return resource;
  } catch (err) {
    console.log(err);
  }
};

const create = async (resource) => {
  try {
    const resourceId = await db('resources').insert(resource).then(resource);
    return findById(resourceId[0]);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAll,
  create,
};
