require('dotenv/config');
const loginService = require('../services/login.Service');
const tokenJWT = require('../Utils/pwt');
const { loginValidate } = require('../services/validators/login.Validate');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const name = await loginService.getNameByEmail(email); 

  const validate = loginValidate(email, password, name);
  if (validate) { return res.status(validate.status).json({ message: validate.message }); } 

  const token = tokenJWT(name.id);
  return res.status(200).json({ token });
  };
