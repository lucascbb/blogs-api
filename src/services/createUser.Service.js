const { User } = require('../models');

const newUser = (objUser) => User.create(objUser);

const getIdbyEmail = (email) => User.findOne({ where: { email } });

module.exports = { 
  newUser,
  getIdbyEmail,
};
