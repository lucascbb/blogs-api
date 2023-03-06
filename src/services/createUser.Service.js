const { User } = require('../models');

const newUser = (objUser) => User.create(objUser);

module.exports = { 
  newUser,
};
