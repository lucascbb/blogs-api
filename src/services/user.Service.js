const { User } = require('../models');

const newUser = (objUser) => User.create(objUser);

const getIdbyEmail = (email) => User.findOne({ where: { email } });

const getAllUsers = () => User.findAll({ attributes: ['displayName', 'email', 'image'] });

module.exports = { 
  newUser,
  getIdbyEmail,
  getAllUsers,
};