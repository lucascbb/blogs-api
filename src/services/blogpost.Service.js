const { BlogPost } = require('../models');
const { Category } = require('../models');
const { PostCategory } = require('../models');

const newBlogPost = (data) => BlogPost.create(data);

const allBlogPosts = () => BlogPost.findAll();

const newPostId = (data) => PostCategory.create(data);

const getAddedContent = (data) => BlogPost.findOne({ where: { content: data } });
const getAddedTitle = (data) => BlogPost.findOne({ where: { title: data } });

const getAllCategories = () => Category.findAll();

module.exports = {
  newBlogPost,
  getAllCategories,
  getAddedContent,
  getAddedTitle,
  newPostId,
  allBlogPosts,
};