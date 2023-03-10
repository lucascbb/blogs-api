require('dotenv/config');
const { validateToken } = require('../Utils/token.Validate');
const { blogPostService } = require('../services');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { authorization } = req.headers;
  const { data } = validateToken(authorization);

  // Pega o post com base no ID
  const idBlogPost0 = await blogPostService.idBlogPost(id);

  console.log(idBlogPost0);
  console.log(id);
  console.log(authorization);
  console.log(data);

  // Verifica se o post existe
  if (!idBlogPost0[0]) { return res.status(404).json({ message: 'Post does not exist' }); }

  // console.log(idBlogPost0);
  // console.log(typeof data.userId);

  // Verifica se o user eh o dono do post
  if (data.userId !== idBlogPost0[0].userId) {
    return res.status(401).json({ message: 'Unauthorized user' }); 
  }

  // Deleta o post
  await blogPostService.deletePost(id);
  return res.status(204).json();
};