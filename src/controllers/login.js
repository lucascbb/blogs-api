require('dotenv/config');
const jwt = require('jsonwebtoken');
const userService = require('../services/userService');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

module.exports = async (req, res) => {
  const { email, password } = req.body;
  const name = await userService.getNameByEmail(email); 

  if (!email || !password) { 
    return res.status(400).json({ message: 'Some required fields are missing' }); 
  }
  
  if (!name) { return res.status(400).json({ message: 'Invalid fields' }); }

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: { userId: name.id } }, secret, jwtConfig);

  return res.status(200).json({ token });
  };
