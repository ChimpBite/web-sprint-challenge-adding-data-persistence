const Resource = require('../resource/model');

exports.checkNameUnique = async (req, res, next) => {
  try {
    const Resources = await Resource.getAll();
    const name = req.body.resource_name;

    const results = Resources.filter((nameCheck) => {
      if (nameCheck.resource_name === name) {
        return nameCheck;
      }
    });
    if (results.length > 0) {
      res.status(400).json({ message: 'that name is taken' });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

exports.checkProjectPayload = async (req, res, next) => {
  const { project_name } = req.body;
  console.log(project_name);
  try {
    if (!project_name) {
      res.status(400).json({ message: 'project name missing' });
    } else {
      next();
    }
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

exports.checkTaskPayload = async (req, res, next) => {
  const { task_description, project_id } = req.body;
  try {
    if (!task_description) {
      res.status(400).json({ message: 'description is missing' });
    } else if (!project_id) {
      res.status(400).json({ message: 'Project Id is missing' });
    } else {
      next();
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
};
