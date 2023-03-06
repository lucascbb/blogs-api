const express = require('express');
const routes = require('./routers/routes');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

const apiRoutes = express.Router();

apiRoutes.post('/login', routes.loginUser);

apiRoutes.post('/user', routes.createUser);

apiRoutes.get('/user', routes.allUsers);

app.use(apiRoutes);

module.exports = app;
