require('dotenv/config');
const { createUserService } = require('../services');
// const tokenJWT = require('../Utils/pwt');
// const { createUserValidate } = require('../services/validators/createUser.Validate');

module.exports = async (req, res) => {
  const allUsers = await createUserService.getAllUsers();
  
  // const token = tokenJWT(id);

  return res.status(200).json(allUsers);
};
