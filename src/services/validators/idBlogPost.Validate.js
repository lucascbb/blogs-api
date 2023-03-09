const idPostIdValidate = (id, currentID, idUserPost, da) => { 
  if (!id) return { status: 404, message: 'Post does not exist' };
  if (currentID !== idUserPost) return { status: 401, message: 'Unauthorized user' };
  if (!da.content || !da.title) return { status: 400, message: 'Some required fields are missing' };
};

module.exports = { idPostIdValidate };