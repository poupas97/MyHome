const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const cors = require('cors');

module.exports = () => {
  const app = express();

  // APP VARS
  app.set('port', process.env.PORT);

  // MIDDLEWARES
  app.use(cors());
  app.use(bodyParser.json());

  // ENDPOINTS
  consign({ cwd: 'api' })
    .then('controllers')
    .then('routes')
    .into(app);

  return app;
};
