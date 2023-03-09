const { PostCategory } = require('../models');

const getNameByEmail = () => PostCategory.findAll();

module.exports = {
  getNameByEmail,
};