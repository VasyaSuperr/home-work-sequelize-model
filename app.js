const express = require('express');
const queryParser = require('query-parser-express');
const { errorHandlers } = require('./middleware');
const router = require('./routes');

const app = express();

app.use(express.json());

app.use(
  queryParser({
    parseBoolean: true,
    parseNumber: true,
  })
);

app.use('/api', router);

app.use(errorHandlers.errorHandler);

module.exports = app;
