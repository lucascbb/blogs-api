require('dotenv/config');
const { userService } = require('../services');
const { userIdValidate } = require('../services/validators/userId.Validate');

module.exports = async (req, res) => {
  const { id } = req.params;

  const validate = userIdValidate(id);
  if (validate) { return res.status(validate.status).json({ message: validate.message }); }

  const userId = await userService.getById(id);
  return res.status(200).json(userId);
};