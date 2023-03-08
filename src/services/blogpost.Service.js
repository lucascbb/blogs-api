const { BlogPost } = require('../models');
const { Category } = require('../models');
// const { PostCategory } = require('../models');

const newBlogPost = (data) => BlogPost.create(data);

// const newPostId = () => PostCategory.create({ post_id: 3, category_id: 3 });

const getAddedPost = (data) => BlogPost.findOne({ where: { content: data } });

const getAllCategories = () => Category.findAll();

module.exports = {
  newBlogPost,
  getAllCategories,
  getAddedPost,
  // newPostId,
};