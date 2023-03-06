require('dotenv/config');
const loginService = require('../services/login.Service');
const tokenJWT = require('../Utils/pwt');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const name = await loginService.getNameByEmail(email); 

  if (!email || !password) { 
    return res.status(400).json({ message: 'Some required fields are missing' }); 
  }
  
  if (!name) { return res.status(400).json({ message: 'Invalid fields' }); }

  const token = tokenJWT(name.id);

  return res.status(200).json({ token });
  };
