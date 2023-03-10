require('dotenv/config');
const { validateToken } = require('../Utils/token.Validate');
const { blogPostService } = require('../services');
// const { deletePostValidate } = require('../services/validators/deletePost.Validate');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const { data } = validateToken(authorization);

  const idBlogPost0 = await blogPostService.idBlogPost(id);

  if (!idBlogPost0[0]) { return res.status(404).json({ message: 'Post does not exist' }); }

  // console.log(idBlogPost0[0].userId);
  // console.log(data.userId);

  if (data.userId !== idBlogPost0[0].userId) { 
    return res.status(401).json({ message: 'Unauthorized user' }); 
  }

  await blogPostService.deletePost(id);
  return res.status(204).json();
};