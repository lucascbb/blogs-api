const createUserValidate = (data) => {
  if (!data.name) { return { status: 400, message: '"name" is required' }; }
};

module.exports = { createUserValidate };