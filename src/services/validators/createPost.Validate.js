const createPostValidate = (data, arrIds) => { 
  if (!data) { return { status: 400, message: 'Some required fields are missing' }; }
  if (arrIds.some((ele) => ele === false)) { 
    return { status: 400, message: 'one or more "categoryIds" not found' }; 
  }
};

module.exports = { createPostValidate };