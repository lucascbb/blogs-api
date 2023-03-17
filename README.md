# Boas-vindas ao repositório do projeto API de Blogs!

Este projeto para o curso da Trybe para o modulo de Backend. Onde o objetivo é criar uma API de blogs utilizando `Node.js` usando o pacote `Sequelize`. A API deve permitir que os usuarios possam realizem operacoes (CRUD)criar, ler, atualizar e remover posts, tags e usuários..

Além disso, é possível realizar operações de autenticação e autorização de usuários.
#vqv 🚀

### 🗓 Entrega 
* Projeto individual.
* Foram `3` dias de projeto.

<br />

# Tecnologias utilizadas

A API foi construída utilizando as seguintes tecnologias:

- Node.js
- Express.js
- Sequelize
- MySQL
- JWT
- Dotenv
- Nodemon
- ESLint

<br />

# Instalação

<details>
  <summary><strong>Comandos</strong></summary>
  Antes de começar a instalação, verifique se você possui o Node.js e o MySQL instalados em sua máquina.

  <br />

  * Dica: Para testar os endpoints recomendo usar a extensão Thunder Client

  <br />

  ####  1 - Clone este repositório para sua máquina local usando o seguinte comando no terminal:
  `git clone https://github.com/lucascbb/blogs-api.git`

  #### 2 - Acesse o diretório do projeto:
  `cd blogs-api`

  #### 3 - Instale as dependências do projeto utilizando o seguinte comando:
  `npm install`

  #### 4 - Rode os serviços node e db com o comando:
  `docker-compose up -d --build`

  #### 5 - Rode os comandos para criar e popular o banco de dados:
  `npm run prestart` e `npm run seed`

  #### 6 - Rode o projeto na porta 3005 utilizando o nodemon:
  `npm run debug`

</details>

<br />

<details>
  <summary><strong>Scripts prontos</strong></summary>
  <br />
  <summary><strong>Diagrama de Entidade-Relacionamento</strong></summary>
  <br />
  <img src="./dere.png" alt="Minha Figura">

  1 - Deleta o banco de dados: "drop": "npx sequelize-cli db:drop"
  - `npm run drop`

  2 - Cria o banco e gera as tabelas: "prestart": "npx sequelize-cli db:create && npx sequelize-cli db:migrate" 
  - `npm run prestart`

  3 - Insere dados/Popula a tabela: "seed": "npx sequelize-cli db:seed:all" 
  - `npm run seed`

</details>
<br />

# Endpoints
<details><summary><strong>A API possui os seguintes endpoints:</strong></summary>

- .get -> `/user`: Retorna uma lista com todos os usuarios cadastrados;

- .get -> `/user/:id`: Retorna um usuario cadastrado baseado no ID;

- .get -> `/categories`: Retorna uma lista com todos as categorias cadastradas;

- .get -> `/post`: Retorna uma lista com todos os posts cadastrados;

- .get -> `/post/search`: Retorna um array de postS que contenham em seu título ou conteúdo o termo passado na URL; 

- .get -> `/post/:id`: Retorna um post cadastrado baseado no ID;

- .post -> `/login`: Fazer login usando um usuario cadastrado, retorna o token;
  
  Exemplo de como corpo da requisição deverá seguir o formato:
    ```json
  {
  "email": "lewishamilton@gmail.com",
  "password": "123456"
  }
  ```

- .post -> `/user`: Cadastrar e adicionar um novo user a sua tabela no banco de dados;
  Exemplo de como corpo da requisição deverá seguir o formato:
  ```json
  {
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
  // a imagem não é obrigatória
  }
  ```

- .post -> `/categories`: Cadastrar uma nova categoria a sua tabela no banco de dados;
  Exemplo de como corpo da requisição deverá seguir o formato:
  ```json
  {
    "name": "Typescript"
  }
  ```

- .post -> `/post`: Cadastrar um novo blog post e vinculá-lo às categorias em suas tabelas no banco de dados;
  Exemplo de como corpo da requisição deverá seguir o formato:
  ```json
  {
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key",
  "categoryIds": [1, 2]
  }
  ```

- .put -> `/post/:id`: Deve permitir a alteração de um blog post caso a pessoa seja dona dele;
  Exemplo de como corpo da requisição deverá seguir o formato:
  ```json
  {
  "title": "Latest updates, August 1st",
  "content": "The whole text for the blog post goes here in this key"
  }
  ```

- .delete -> `/user/me`: Deletar você do banco de dados, baseado no id que esta dentro do seu token;

- .delete ->`/post/:id`: Deletar um blog post baseado no id do banco de dados se ele existir;
</details>
<br />

# Requisitos Obrigatórios

### 1 - Crie migrations para as tabelas `users`, `categories`, `blog_posts`, `posts_categories`
<br />

### 2 - Crie o modelo `User` em `src/models/User.js` com as propriedades corretas
<br />

### 3 - Sua aplicação deve ter o endpoint POST `/login`
<br />

### 4 - Sua aplicação deve ter o endpoint POST `/user`
<br />

### 5 - Sua aplicação deve ter o endpoint GET `/user`
<br />

### 6 - Sua aplicação deve ter o endpoint GET `/user/:id`
<br />

### 7 - Crie o modelo `Category` em `src/models/Category.js` com as propriedades corretas
<br />

### 8 - Sua aplicação deve ter o endpoint POST `/categories`
<br />

### 9 - Sua aplicação deve ter o endpoint GET `/categories`
<br />

### 10 - Crie o modelo `BlogPost` em `src/models/BlogPost.js` com as propriedades e associações corretas
<br />

### 11 - Crie o modelo `PostCategory` em `src/models/PostCategory.js` com as propriedades e associações corretas

### 12 - Sua aplicação deve ter o endpoint POST `/post`
<br />

### 13 - Sua aplicação deve ter o endpoint GET `/post`
<br />

### 14 - Sua aplicação deve ter o endpoint GET `/post/:id`
<br />

### 15 - Sua aplicação deve ter o endpoint PUT `/post/:id`
<br />

# Requisitos Bônus

### 16 - Sua aplicação deve ter o endpoint DELETE `/post/:id`
<br />

### 17 - Sua aplicação deve ter o endpoint DELETE `/user/me`
<br />

### 18 - Sua aplicação deve ter o endpoint GET `/post/search?q=:searchTerm`
