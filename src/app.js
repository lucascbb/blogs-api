const express = require('express');
const routes = require('./routes');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

const apiRoutes = express.Router();

apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.get('/api/users', routes.getUsers);

app.use(apiRoutes);

module.exports = app;
