const { User } = require('../models');

const getNameByEmail = (email) => User.findOne(
  { where: { email }, attributes: ['display_name', 'id'] },
);

module.exports = {
  getNameByEmail,
};
