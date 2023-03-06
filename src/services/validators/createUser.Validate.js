const createUserValidate = (data, user) => {
  const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;

  if (data.displayName.length < 8) { 
    return { status: 400, message: '"displayName" length must be at least 8 characters long' }; 
  }

  if (!regexEmail.test(data.email)) { 
    return { status: 400, message: '"email" must be a valid email' }; 
  }

  if (data.password.length < 6) { 
    return { status: 400, message: '"password" length must be at least 6 characters long' }; 
  }

  if (user) { 
    return { status: 409, message: 'User already registered' }; 
  } 
};

module.exports = { createUserValidate };