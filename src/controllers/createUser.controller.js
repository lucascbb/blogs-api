require('dotenv/config');
const { createUserService } = require('../services');
const tokenJWT = require('../Utils/pwt');
const { createUserValidate } = require('../services/validators/createUser.Validate');

module.exports = async (req, res) => {
  const data = req.body;

  // verificando se existem algum id para esse Email
  const hasId = await createUserService.getIdbyEmail(data.email);
  // validando as informacoes recebidas nessa funcao createUserValidate
  const validate = createUserValidate(data, hasId);
  // se existir algum erro de validacao aciona esse IF
  if (validate) { return res.status(validate.status).json({ message: validate.message }); }
  // adicionando na tabela o novo usuario
  await createUserService.newUser(data);

  // pegando o id do usuario criado acima
  const { id } = await createUserService.getIdbyEmail(data.email);
  // chamando a funcao tokenJWT, criada para gerar token 
  const token = tokenJWT(id);
  // retorno que novo usuario foi criado com sucesso e retorna o token
  return res.status(201).json({ token });
};
