const idPostIdValidate = (id) => { 
  if (!id) return { status: 404, message: 'Post does not exist' }; 
};

module.exports = { idPostIdValidate };