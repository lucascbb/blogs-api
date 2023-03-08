require('dotenv/config');
const { blogPostService } = require('../services');
const { createPostValidate } = require('../services/validators/createPost.Validate');

module.exports = async (req, res) => {
  const data = req.body;
  const { title, content, categoryIds } = req.body;
  const alredyAdd = await blogPostService.getAddedPost(content);

  const a = await blogPostService.getAllCategories();
  let arrId = [];
  for (let i = 0; i < categoryIds.length; i += 1) {
    arrId = arrId.concat(a.map((ele) => ele.dataValues.id).some((ele2) => ele2 === categoryIds[i]));
  }

  const validate = createPostValidate(title, arrId, alredyAdd);
  if (validate) { return res.status(validate.status).json({ message: validate.message }); }

  const obj = { title, content, userId: 1, published: Date.now(), updated: Date.now() };

  await blogPostService.newBlogPost(obj);
  const { dataValues } = await blogPostService.getAddedPost(content);
  
  return res.status(201).json(dataValues);
};