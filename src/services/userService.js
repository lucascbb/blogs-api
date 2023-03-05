const { User } = require('../models');

const login = (nome, email, password) => User.create(nome, email, password);

const getUsers = () => User.findAll();

const getNameByEmail = (email) => User.findOne(
  { where: { email }, attributes: ['display_name', 'id'] },
);

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  login,
  getUsers,
  getNameByEmail,
  getByUserId,
};
