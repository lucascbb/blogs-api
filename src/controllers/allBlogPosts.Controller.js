require('dotenv/config');
const { blogPostService } = require('../services');

module.exports = async (_req, res) => {
  const result = await blogPostService.allBlogPosts();
  const { dataValues } = await blogPostService.getUsersById(result.map((ele) => ele.userId));
  // for (let i = 0; i < result.length; i += 1) { 
  //   console.log(result[i].dataValues);
  // }

  console.log(result[0].dataValues);
  console.log(dataValues);
  console.log([result[0].dataValues].concat(dataValues));

  return res.status(200).json(result);
};