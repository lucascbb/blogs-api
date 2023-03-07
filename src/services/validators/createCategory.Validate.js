const createUserValidate = (name) => {
  if (!name) { return { status: 400, message: '"name" is required' }; }
};

module.exports = { createUserValidate };