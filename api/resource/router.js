// build your `/api/resources` router here
const express = require('express');

const Resources = require('./model');

const router = express.Router();

const { checkNameUnique } = require('../middleware/middleware');

// GET /api/resources/
router.get('/', async (req, res, next) => {
  try {
    Resources.getAll().then((resources) => {
      res.json(resources);
    });
  } catch (err) {
    next(err);
  }
});

// POST /api/resources
router.post('/', checkNameUnique, async (req, res, next) => {
  try {
    const resource = req.body;

    Resources.create(resource).then((resource) => {
      res.status(201).json(resource);
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
