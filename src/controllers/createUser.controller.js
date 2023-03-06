require('dotenv/config');
const { createUserService } = require('../services');
const tokenJWT = require('../Utils/pwt');
const { createUserValidate } = require('../services/validators/createUser.Validate');

module.exports = async (req, res) => {
  const data = req.body;

  const hasId = await createUserService.getIdbyEmail(data.email);
  const result = createUserValidate(data, hasId);

  if (result) { return res.status(result.status).json({ message: result.message }); }

  await createUserService.newUser(data);
  
  const { id } = await createUserService.getIdbyEmail(data.email);
  const token = tokenJWT(id);

  return res.status(200).json({ token });
};
