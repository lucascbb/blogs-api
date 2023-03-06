require('dotenv/config');
const { userService } = require('../services');
const { userIdValidate } = require('../services/validators/userId.Validate');

module.exports = async (req, res) => {
  const { id } = req.params;

  const userId = await userService.getById(id);

  const validate = userIdValidate(userId);
  if (validate) { return res.status(validate.status).json({ message: validate.message }); }

  return res.status(200).json(userId);
};