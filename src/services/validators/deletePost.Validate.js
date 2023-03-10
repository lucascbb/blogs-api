const deletePostValidate = (id, currentID, idUserPost) => { 
  if (!id) return { status: 404, message: 'Post does not exist' };
  if (currentID !== idUserPost) return { status: 401, message: 'Unauthorized user' };
};

module.exports = { deletePostValidate };