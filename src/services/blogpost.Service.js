const { BlogPost } = require('../models');

const newBlogPost = (data) => BlogPost.bulkCreate(data);

module.exports = {
  newBlogPost,
};