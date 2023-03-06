const express = require('express');
const routes = require('./routers/routes');
const validateToken = require('./middlewares/token');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

const apiRoutes = express.Router();

apiRoutes.post('/login', routes.loginUser);

apiRoutes.post('/user', routes.createUser);

apiRoutes.get('/user', validateToken, routes.allUsers);

app.use(apiRoutes);

module.exports = app;
