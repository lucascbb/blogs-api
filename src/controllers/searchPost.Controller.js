require('dotenv/config');
const { blogPostService } = require('../services');

module.exports = async (req, res) => {
  const { q } = req.query;

  const lowerCase = q.toLowerCase();
  const inner = await blogPostService.allBlogPosts();
  const result = inner.filter((ele) => 
    ele.title.toLowerCase().includes(lowerCase) || ele.content.toLowerCase().includes(lowerCase));

  return res.status(200).json(result);
};