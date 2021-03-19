// build your server here and require it from index.js
const express = require('express');

// const RecipeRouter = require('./router/router');

const server = express();

server.use(express.json());

// server.use('/api/recipes', RecipeRouter);

module.exports = server;
