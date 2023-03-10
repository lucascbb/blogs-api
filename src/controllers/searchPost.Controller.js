require('dotenv/config');
const { blogPostService } = require('../services');

module.exports = async (req, res) => {
  const { q } = req.query;

  const lowerCase = q.toLowerCase();
  const allBlogs = await blogPostService.allBlogPosts();
  const result = allBlogs.filter((ele) => 
    ele.title.toLowerCase().includes(lowerCase) || ele.content.toLowerCase().includes(lowerCase));

  return res.status(200).json(result);
};