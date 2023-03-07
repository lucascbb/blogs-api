const { BlogPost } = require('../models');
const { Category } = require('../models');

const newBlogPost = (data) => BlogPost.create(data);

const getAllCategories = () => Category.findAll();

module.exports = {
  newBlogPost,
  getAllCategories,
};