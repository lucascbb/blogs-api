const express = require('express');
const routes = require('./routers/routes');
const validateToken = require('./middlewares/token');

const app = express();

// não remova ou mova esse endpoint
app.get('/', (_request, response) => { response.send(); });

app.use(express.json());

const apiRoutes = express.Router();

apiRoutes.post('/login', routes.loginUser);

apiRoutes.post('/user', routes.createUser);

apiRoutes.get('/user', validateToken, routes.allUsers);

apiRoutes.get('/user/:id', validateToken, routes.idUsers);

apiRoutes.delete('/user/me', validateToken, routes.deleteMe);

apiRoutes.post('/categories', validateToken, routes.createCategory);

apiRoutes.get('/categories', validateToken, routes.allCategories);

apiRoutes.post('/post', validateToken, routes.createBlogPost);

apiRoutes.get('/post', validateToken, routes.allBlogPosts);

apiRoutes.get('/post/search', validateToken, routes.searchPost);

apiRoutes.get('/post/:id', validateToken, routes.idBlogPosts);

apiRoutes.put('/post/:id', validateToken, routes.editBlogPost);

apiRoutes.delete('/post/:id', validateToken, routes.deletePost);

app.use(apiRoutes);

module.exports = app;
