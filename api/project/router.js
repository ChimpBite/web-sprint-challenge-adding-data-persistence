// build your `/api/projects` router here
const express = require('express');

const Projects = require('./model');

const { checkProjectPayload } = require('../middleware/middleware');

const router = express.Router();

// GET /api/projects/
router.get('/', async (req, res, next) => {
  try {
    Projects.getAll().then((projects) => {
      res.json(projects);
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// POST /api/projects
router.post('/', checkProjectPayload, async (req, res, next) => {
  try {
    const project = req.body;

    Projects.create(project).then((project) => {
      res.status(201).json(project);
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
