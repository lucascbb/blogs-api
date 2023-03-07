require('dotenv/config');
const { blogPostService } = require('../services');

module.exports = async (req, res) => {
  const data = req.body;

  // const validate = createUserValidate(data.name);
  // if (validate) { return res.status(validate.status).json({ message: validate.message }); }
  
  await blogPostService.newBlogPost(data);
  
  return res.status(201).json(data);
};