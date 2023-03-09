require('dotenv/config');
const { blogPostService } = require('../services');

module.exports = async (_req, res) => {
  const inner = await blogPostService.innerjoin();
  return res.status(200).json(inner);
};