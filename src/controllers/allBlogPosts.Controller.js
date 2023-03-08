require('dotenv/config');
const { blogPostService } = require('../services');

module.exports = async (_req, res) => {
  const result = await blogPostService.allBlogPosts();
  console.log(result.userId);
  return res.status(200).json(result);
};