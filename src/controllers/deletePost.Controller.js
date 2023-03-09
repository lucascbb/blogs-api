require('dotenv/config');
const { blogPostService } = require('../services');
const { validateToken } = require('../Utils/token.Validate');
const { deletePostIdValidate } = require('../services/validators/deletePost.Validate');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.header;

  const idBlogPost = await blogPostService.idBlogPost(id);

  const currentID = validateToken(authorization).data.userId;
  // const idUserPost = idBlogPost[0].userId;

  const validate = deletePostIdValidate(idBlogPost);
  if (validate) { return res.status(validate.status).json({ message: validate.message }); }

  await blogPostService.deletePost(id);
  return res.status(204).json('sucess item deleted');
};