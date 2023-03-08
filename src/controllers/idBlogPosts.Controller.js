require('dotenv/config');
const { blogPostService } = require('../services');
const { idPostIdValidate } = require('../services/validators/idBlogPost.Validate');

module.exports = async (req, res) => {
  const { id } = req.params;

  const idBlogPost = await blogPostService.idBlogPosts(id);

  const allBlogsPosts = await blogPostService.allBlogPosts();

  const userId = await blogPostService.getUsersById(allBlogsPosts.map((ele) => ele.userId));

  const validate = idPostIdValidate(idBlogPost);
  if (validate) { return res.status(validate.status).json({ message: validate.message }); } 

  const postById = [{
    id: idBlogPost.dataValues.id,
    title: idBlogPost.dataValues.title,
    content: idBlogPost.dataValues.content,
    userId: idBlogPost.dataValues.userId,
    published: idBlogPost.dataValues.published,
    updated: idBlogPost.dataValues.updated,
    user: userId.dataValues,
    categories: [{ id: 1, name: 'Inovação' }],
  }];

  return res.status(200).json(postById);
};