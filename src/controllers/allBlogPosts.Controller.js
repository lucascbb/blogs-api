require('dotenv/config');
const { blogPostService } = require('../services');

module.exports = async (_req, res) => {
  const allBlogsPosts = await blogPostService.allBlogPosts();
  const userId = await blogPostService.getUsersById(allBlogsPosts.map((ele) => ele.userId));

  const result = [];
  allBlogsPosts.forEach((numero) => result.push({
    id: numero.dataValues.id,
    title: numero.dataValues.title,
    content: numero.dataValues.content,
    userId: numero.dataValues.userId,
    published: numero.dataValues.published,
    updated: numero.dataValues.updated,
    user: userId.dataValues,
    categories: [{ id: 1, name: 'Inovação' }],
  }));

  return res.status(200).json(result);
};