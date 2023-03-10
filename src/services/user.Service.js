const { User } = require('../models');

const newUser = (objUser) => User.create(objUser);

const getIdbyEmail = (email) => User.findOne({ where: { email } });

const getAllUsers = () => User.findAll({ attributes: ['displayName', 'email', 'image'] });

const getById = (id) => User.findByPk(id, { attributes: ['id', 'displayName', 'email', 'image'] });

const deleteMe = (id) => User.destroy({ where: { id } });

module.exports = { 
  newUser,
  getIdbyEmail,
  getAllUsers,
  getById,
  deleteMe,
};