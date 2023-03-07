const loginUser = require('../controllers/login.Controller');
const createUser = require('../controllers/createUser.Controller');
const allUsers = require('../controllers/allUsers.Controller');
const idUsers = require('../controllers/idUsers.Controller');
const createCategory = require('../controllers/createCategory.Controller');
const allCategories = require('../controllers/allCategories.Controller');
const createBlogPost = require('../controllers/createBlogPost.Controller');

module.exports = {
  loginUser,
  createUser,
  allUsers,
  idUsers,
  createCategory,
  allCategories,
  createBlogPost,
};