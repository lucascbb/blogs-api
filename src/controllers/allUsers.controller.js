require('dotenv/config');
const { createUserService } = require('../services');

module.exports = async (req, res) => {
  const allUsers = await createUserService.getAllUsers();
  return res.status(200).json(allUsers);
};