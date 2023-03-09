const { BlogPost } = require('../models');
const { Category } = require('../models');
const { PostCategory } = require('../models');
const { User } = require('../models');

const newBlogPost = (data) => BlogPost.create(data);

const allBlogPosts = () => BlogPost.findAll();

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

const idBlogPosts = (id) => BlogPost.findByPk(id);

const newPostId = (data) => PostCategory.create(data);

const getAddedContent = (data) => BlogPost.findOne({ where: { content: data } });
const getAddedTitle = (data) => BlogPost.findOne({ where: { title: data } });

const getUsersById = (data) => User.findOne(
  { attributes: { exclude: ['password'] }, where: { id: data } },
);

module.exports = {
  newBlogPost,
  getAddedContent,
  getAddedTitle,
  newPostId,
  allBlogPosts,
  getUsersById,
  idBlogPosts,
  innerjoin,
};