require('dotenv/config');
const { blogPostService } = require('../services');
const { createPostValidate } = require('../services/validators/createPost.Validate');

module.exports = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const allCategories = await blogPostService.getAllCategories();

  // Aqui uso um for para adicionar no array todos Ids que ja existem na tabela,
  // valido caso ja exista pode usar ele como foreign key em outra tabela
  let arrId = [];
  for (let i = 0; i < categoryIds.length; i += 1) { 
    arrId = arrId.concat(allCategories.map((ele) => ele.dataValues.id)
    .some((ele2) => ele2 === categoryIds[i]));
  }

  // Duas funcoes que verificam se ja existe algum item na tabela com mesmo conteudo que content e title
  const alredyAdd = await blogPostService.getAddedContent(content);
  const alredyAdd2 = await blogPostService.getAddedTitle(title);

  // Verificamos se os itens passados pelo usuario estao de acordo
  const validate = createPostValidate(title, arrId, alredyAdd, alredyAdd2);
  if (validate) { return res.status(validate.status).json({ message: validate.message }); }

  // Aqui passamos um objeto para a funcao que popula a tabela blogpost
  const itensToAdd = { title, content, userId: 1, published: Date.now(), updated: Date.now() };
  await blogPostService.newBlogPost(itensToAdd);

  // Aqui pegamos o dataValues pois dentro dele tem o ID do ultimo item adicionado
  const { dataValues } = await blogPostService.getAddedContent(content);
  
  // Aqui o retorno eh uma promises (igual o nome rs), e por isso usamos o Promise.All
  // Depois populo a tabela posts_categories
  const promises = [{ id: categoryIds[0] }, { id: categoryIds[1] }].map((category) => 
  blogPostService.newPostId({ postId: dataValues.id, categoryId: category.id }));
  await Promise.all(promises);

  // Caso td esteja c as validations aqui deve retornar o item adicionado na tabela blogposts
  return res.status(201).json(dataValues);
};