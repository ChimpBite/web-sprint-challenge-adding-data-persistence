// build your `/api/tasks` router here
const express = require('express');

const Tasks = require('./model');

const { checkTaskPayload } = require('../middleware/middleware');

const router = express.Router();

// GET /api/tasks/
router.get('/', async (req, res, next) => {
  try {
    Tasks.getAll().then((tasks) => {
      res.json(tasks);
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// POST /api/tasks
router.post('/', checkTaskPayload, async (req, res, next) => {
  try {
    const task = req.body;

    Tasks.create(task).then((task) => {
      res.status(201).json(task);
    });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
