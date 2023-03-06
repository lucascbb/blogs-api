require('dotenv/config');
const { categoryService } = require('../services');

module.exports = async (req, res) => {
  const data = req.body;
  await categoryService.newCategory(data);

  return res.status(200).json({ message: 'Success' });
};