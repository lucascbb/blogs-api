const loginUser = require('../controllers/login.Controller');
const createUser = require('../controllers/createUser.Controller');
const allUsers = require('../controllers/allUsers.Controller');
const idUsers = require('../controllers/idUsers.Controller');

module.exports = {
  loginUser, createUser, allUsers, idUsers,
};