require('dotenv/config');
const { validateToken } = require('../Utils/token.Validate');
const { blogPostService } = require('../services');
const { idPostIdValidate } = require('../services/validators/idBlogPost.Validate');

module.exports = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const { authorization } = req.headers;

  const idBlogPost = await blogPostService.idBlogPost(id);

  const currentID = validateToken(authorization).data.userId;
  const idUserPost = idBlogPost[0].userId;
  const validate = idPostIdValidate(idBlogPost, currentID, idUserPost, data);
  if (validate) { return res.status(validate.status).json({ message: validate.message }); } 

  console.log();

  return res.status(200).json(data);
};