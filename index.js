/* eslint no-console: ["error", { allow: ["info", "error"] }] */

const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('errorhandler');
const methodOverride = require('method-override');

const app = express();
const routes = require('./routes');

require('dotenv').config({
  path: path.resolve(__dirname, '.env'),
  silent: true,
});

const PORT = parseInt(process.env.PORT, 10) || 8000;
const DEV = process.env.NODE_ENV !== 'production';

app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, './public')));

app.use('*', routes);

app.use(methodOverride());

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(
  errorHandler({
    dumpExceptions: true,
    showStack: true,
  }),
);

app.listen(PORT, '0.0.0.0', err => {
  const info = `==> Listening on port ${PORT}. Open up http://0.0.0.0:${PORT}/ DEV: ${DEV}`;
  if (err) {
    console.error(err);
  }
  console.info(info);
});
