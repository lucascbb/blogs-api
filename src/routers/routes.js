const loginUser = require('../controllers/login.controller');
const createUser = require('../controllers/createUser.controller');
const allUsers = require('../controllers/allUsers.controller');
const idUsers = require('../controllers/idUsers.controller');

module.exports = {
  loginUser, createUser, allUsers, idUsers,
};