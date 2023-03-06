const loginValidate = (email, password, name) => {
  if (!email || !password) return { status: 400, message: 'Some required fields are missing' };
  
  if (!name) return { status: 400, message: 'Invalid fields' }; 

  return null;  
};

module.exports = {
  loginValidate,
};