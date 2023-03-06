const { User } = require('../models');

const newUser = (objUser) => User.create(objUser);

const getIdbyEmail = (email) => User.findOne({ where: { email } });

const getAllUsers = () => User.findAll();

module.exports = { 
  newUser,
  getIdbyEmail,
  getAllUsers,
};
