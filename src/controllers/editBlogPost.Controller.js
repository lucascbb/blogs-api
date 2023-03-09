require('dotenv/config');
// const { blogPostService } = require('../services');
// const { idPostIdValidate } = require('../services/validators/idBlogPost.Validate');

module.exports = async (req, res) => {
  const { id } = req.params;

  // const validate = idPostIdValidate(idBlogPost);
  // if (validate) { return res.status(validate.status).json({ message: validate.message }); } 

  return res.status(200).json(id);
};