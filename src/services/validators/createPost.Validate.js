const createPostValidate = (data, arrIds, alredyAdd) => { 
  if (!data) { return { status: 400, message: 'Some required fields are missing' }; }
  if (arrIds.some((ele) => ele === false)) { 
    return { status: 400, message: 'one or more "categoryIds" not found' }; 
  }
  if (alredyAdd) { return { status: 400, message: 'These content alredy added' }; }
};

module.exports = { createPostValidate };