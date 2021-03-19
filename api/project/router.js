// build your `/api/projects` router here
const express = require('express');

const Projects = require('./model');

const router = express.Router();

// GET /api/projects/
router.get('/', (req, res, next) => {
  Projects.getAll()
    .then((projects) => {
      res.json(projects);
    })
    .catch(next);
});

// POST /api/projects
router.post('/', (req, res, next) => {
  const project = req.body;

  Projects.create(project)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

module.exports = router;
