require('dotenv/config');
const { blogPostService } = require('../services');

module.exports = async (req, res) => {
  const { q } = req.query;

  const inner = await blogPostService.allBlogPosts();
  const result = inner.filter((ele) => ele.title.includes(q) || ele.content.includes(q));
  return res.status(200).json(result);
};