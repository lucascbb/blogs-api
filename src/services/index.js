const loginService = require('./login.Service');
const userService = require('./user.Service');
const categoryService = require('./category.Service');
const blogPostService = require('./blogpost.Service');
const postCategoryService = require('./postCategories.Service');

module.exports = { 
  loginService, 
  postCategoryService,
  userService,
  categoryService,
  blogPostService,
};
