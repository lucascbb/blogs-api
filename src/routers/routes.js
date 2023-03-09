const loginUser = require('../controllers/login.Controller');
const createUser = require('../controllers/createUser.Controller');
const allUsers = require('../controllers/allUsers.Controller');
const idUsers = require('../controllers/idUsers.Controller');
const createCategory = require('../controllers/createCategory.Controller');
const allCategories = require('../controllers/allCategories.Controller');
const createBlogPost = require('../controllers/createBlogPost.Controller');
const allBlogPosts = require('../controllers/allBlogPosts.Controller');
const idBlogPosts = require('../controllers/idBlogPosts.Controller');
const editBlogPost = require('../controllers/editBlogPost.Controller');
const deletePost = require('../controllers/deletePost.Controller');

module.exports = {
  loginUser,
  createUser,
  allUsers,
  idUsers,
  createCategory,
  allCategories,
  createBlogPost,
  allBlogPosts,
  idBlogPosts,
  editBlogPost,
  deletePost,
};