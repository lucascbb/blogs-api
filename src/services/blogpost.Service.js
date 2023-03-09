const { BlogPost } = require('../models');
const { Category } = require('../models');
const { PostCategory } = require('../models');
const { User } = require('../models');

const newBlogPost = (data) => BlogPost.create(data);

const getAllCategories = () => Category.findAll();

const innerjoin = () => BlogPost.findAll(
  {
    include: [
      {
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    { 
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  },
);

const innerId = (data) => BlogPost.findAll(
  { where: { id: data },
    include: [
      {
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },
    },
    { 
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    }],
  },
);

const idBlogPosts = (id) => BlogPost.findByPk(id);

const newPostId = (data) => PostCategory.create(data);

const getAddedContent = (data) => BlogPost.findOne({ where: { content: data } });
const getAddedTitle = (data) => BlogPost.findOne({ where: { title: data } });

module.exports = {
  newBlogPost,
  getAddedContent,
  getAddedTitle,
  newPostId,
  getAllCategories,
  idBlogPosts,
  innerjoin,
  innerId,
};