require('dotenv/config');
const { categoryService } = require('../services');

module.exports = async (_req, res) => {
  const result = await categoryService.getAllCategories();
  return res.status(200).json(result);
};