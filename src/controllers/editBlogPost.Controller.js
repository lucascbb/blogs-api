require('dotenv/config');
const { validateToken } = require('../Utils/token.Validate');
const { blogPostService } = require('../services');
const { editPostIdValidate } = require('../services/validators/editPost.Validate');

module.exports = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const { authorization } = req.headers;

  // Atualizando o banco de dados
  await blogPostService.updatePost(data, id);
  // Retornando o post baseado no Id 
  const idBlogPost = await blogPostService.idBlogPost(id);

  // As proximas 4 linhas de codigo sao para validar
  // Retorna o usuario que esta logado atraves do TOKEN
  const currentID = validateToken(authorization).data.userId;
  const idUserPost = idBlogPost[0].userId;
  const validate = editPostIdValidate(idBlogPost, currentID, idUserPost, data);
  if (validate) { return res.status(validate.status).json({ message: validate.message }); } 

  return res.status(200).json(idBlogPost[0].dataValues);
};