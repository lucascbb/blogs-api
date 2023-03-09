require('dotenv/config');
const { blogPostService } = require('../services');

module.exports = async (_req, res) => {
  const inner = await blogPostService.allBlogPosts();
  return res.status(200).json(inner);
};