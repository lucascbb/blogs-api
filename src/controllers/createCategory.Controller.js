require('dotenv/config');
const { categoryService } = require('../services');
const { createUserValidate } = require('../services/validators/createCategory.Validate');

module.exports = async (req, res) => {
  const data = req.body;
  const { name } = req.body;
  
  await categoryService.newCategory(data);

  const validate = createUserValidate(data);
  if (validate) { return res.status(validate.status).json({ message: validate.message }); }

  const { dataValues } = await categoryService.getIdByCategory(name);
  console.log(dataValues);

  return res.status(201).json(dataValues);
};