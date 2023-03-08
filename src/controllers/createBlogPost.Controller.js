require('dotenv/config');
const { blogPostService } = require('../services');
const { createPostValidate } = require('../services/validators/createPost.Validate');

module.exports = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const allCategories = await blogPostService.getAllCategories();
  let arrId = [];
  for (let i = 0; i < categoryIds.length; i += 1) {
    arrId = arrId.concat(allCategories.map((ele) => ele.dataValues.id)
    .some((ele2) => ele2 === categoryIds[i]));
  }

  const alredyAdd = await blogPostService.getAddedPost(content);
  const validate = createPostValidate(title, arrId, alredyAdd);
  if (validate) { return res.status(validate.status).json({ message: validate.message }); }

  const obj = { title, content, userId: 1, published: Date.now(), updated: Date.now() };
  await blogPostService.newBlogPost(obj);

  const { dataValues } = await blogPostService.getAddedPost(content);

  const on = [{ id: categoryIds[0] }, { id: categoryIds[1] }];

  const promises = on.map((category) => 
  blogPostService.newPostId({ postId: dataValues.id, categoryId: category.id }));
  
  await Promise.all(promises);

  return res.status(201).json(dataValues);
};