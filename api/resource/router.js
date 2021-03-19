// build your `/api/resources` router here
const express = require('express');

const Resources = require('./model');

const router = express.Router();

// GET /api/resources/
router.get('/', (req, res, next) => {
  Resources.getAll()
    .then((resources) => {
      res.json(resources);
    })
    .catch(next);
});

// POST /api/Resources
router.post('/', (req, res, next) => {
  const resource = req.body;

  Resources.create(resource)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

module.exports = router;
