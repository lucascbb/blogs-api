require('dotenv/config');
const { createUserService } = require('../services');
const tokenJWT = require('../Utils/pwt');

module.exports = async (req, res) => {
  const data = req.body;

  await createUserService.newUser(data);
  const { id } = await createUserService.getIdbyEmail(data.email);

  const token = tokenJWT(id);
  return res.status(200).json({ token });
};
