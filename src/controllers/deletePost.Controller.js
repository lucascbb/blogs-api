require('dotenv/config');
const { blogPostService } = require('../services');

module.exports = async (req, res) => {
  const { id } = req.params;

  await blogPostService.deletePost(id);
  const inner = await blogPostService.allBlogPosts();
  return res.status(200).json('sucess item deleted');
};