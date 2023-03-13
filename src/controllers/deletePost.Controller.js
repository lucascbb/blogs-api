require('dotenv/config');
const { validateToken } = require('../Utils/token.Validate');
const { blogPostService } = require('../services');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const { data } = validateToken(authorization);

  // Pega o post com base no ID
  const idBlogPost = await blogPostService.idBlogPost2(id);

  // Verifica se o post existe
  if (!idBlogPost) { return res.status(404).json({ message: 'Post does not exist' }); }
  console.log(idBlogPost.userId);

  // Verifica se o user eh o dono do post
  if (data.userId !== idBlogPost.userId) {
    return res.status(401).json({ message: 'Unauthorized user' }); 
  }

  // Deleta o post
  // await blogPostService.deletePost(id);
  return res.status(204).json();
};