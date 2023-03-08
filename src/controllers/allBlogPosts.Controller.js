require('dotenv/config');
const { blogPostService } = require('../services');

module.exports = async (_req, res) => {
  const result = await blogPostService.allBlogPosts();
  const { dataValues } = await blogPostService.getUsersById(result.map((ele) => ele.userId));
  console.log(dataValues);
  return res.status(200).json(result);
};