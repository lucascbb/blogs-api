require('dotenv/config');
const { categoryService } = require('../services');
const { createUserValidate } = require('../services/validators/createCategory.Validate');

module.exports = async (req, res) => {
  const data = req.body;
  const { name } = req.body;

  const validate = createUserValidate(name);
  if (validate) { return res.status(validate.status).json({ message: validate.message }); }

  await categoryService.newCategory(data);

  const { dataValues } = await categoryService.getIdByCategory(name);
  console.log(dataValues);

  return res.status(201).json(dataValues);
};