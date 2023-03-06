require('dotenv/config');
const { userService } = require('../services');

module.exports = async (_req, res) => {
  const allUsers = await userService.getAllUsers();
  return res.status(200).json(allUsers);
};