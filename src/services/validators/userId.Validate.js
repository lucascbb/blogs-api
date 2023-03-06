const userIdValidate = (id) => {
  if (!id) return { status: 404, message: 'User does not exist' };

  return null;  
};

module.exports = { userIdValidate };