module.exports = (sequelize, DataTypes) => {
  const CreateUser = sequelize.define('User', {
    display_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
  });

  return CreateUser;
};