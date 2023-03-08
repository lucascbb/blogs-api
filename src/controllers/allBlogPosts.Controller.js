require('dotenv/config');
const { blogPostService } = require('../services');

module.exports = async (_req, res) => {
  const result = await blogPostService.allBlogPosts();
  const userId = await blogPostService.getUsersById(result.map((ele) => ele.userId));

  const a = [];
  result.forEach((numero) => a.push({
    id: numero.dataValues.id,
    title: numero.dataValues.title,
    content: numero.dataValues.content,
    userId: numero.dataValues.userId,
    published: numero.dataValues.published,
    updated: numero.dataValues.updated,
    user: userId.dataValues,
    categories: [{ id: 1, name: 'Inovação' }],
  }));

  console.log(result.map((ele) => ele.userId));
  return res.status(200).json(a);
};