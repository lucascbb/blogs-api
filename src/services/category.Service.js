const { Category } = require('../models');

const newCategory = (objCategory) => Category.create(objCategory);

const getIdByCategory = (nameCategory) => Category.findOne({ where: { name: nameCategory } });

const getAllCategories = () => Category.findAll();

module.exports = { 
  newCategory,
  getIdByCategory,
  getAllCategories,
};