const { Category } = require('../models');

const newCategory = (nameCategory) => Category.create(nameCategory);

module.exports = { 
  newCategory,
};