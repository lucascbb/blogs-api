require('dotenv/config');
const { validateToken } = require('../Utils/token.Validate');
const { userService } = require('../services');

module.exports = async (req, res) => {
  const { authorization } = req.headers;
  const { data } = validateToken(authorization);

  await userService.deleteMe(data.userId);
  return res.status(204).json();
};