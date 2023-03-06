require('dotenv/config');
const { createUserService } = require('../services');

module.exports = async (req, res) => {
  const data = req.body;

  await createUserService.newUser(data); 

  return res.status(200).json({ message: 'Success' });
};
