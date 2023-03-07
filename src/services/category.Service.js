const { Category } = require('../models');

const newCategory = (objCategory) => Category.create(objCategory);

const getIdByCategory = (nameCategory) => Category.findOne({ where: { name: nameCategory } });

module.exports = { 
  newCategory,
  getIdByCategory,
};