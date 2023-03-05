const { User } = require('../models');

// const getUsers = () => User.findAll();

const getNameByEmail = (email) => User.findOne(
  { where: { email }, attributes: ['display_name', 'id'] },
);

// const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  // getUsers,
  getNameByEmail,
  // getByUserId,
};
