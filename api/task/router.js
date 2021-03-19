// build your `/api/tasks` router here
const express = require('express');

const Tasks = require('./model');

const router = express.Router();

// GET /api/tasks/
router.get('/', (req, res, next) => {
  Tasks.getAll()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch(next);
});

// POST /api/tasks
router.post('/', (req, res, next) => {
  const task = req.body;

  Tasks.create(task)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

module.exports = router;
