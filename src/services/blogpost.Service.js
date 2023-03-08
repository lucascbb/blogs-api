const { BlogPost } = require('../models');
const { Category } = require('../models');
const { PostCategory } = require('../models');

const newBlogPost = (data) => BlogPost.create(data);

const newPostId = (data) => PostCategory.create(data);

const getAddedPost = (data) => BlogPost.findOne({ where: { content: data } });

const getAllCategories = () => Category.findAll();

module.exports = {
  newBlogPost,
  getAllCategories,
  getAddedPost,
  newPostId,
};