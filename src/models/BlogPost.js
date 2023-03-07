module.exports = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userid: {
      type: DataTypes.INTEGER,
      // foreignKey: true,
    },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, 
  {
    timestamps: false,
    tableName: 'BlogPost',
    underscored: true,
  });

  // BlogPost.associate = (models) => {
  //   BlogPost.belongsTo(models.Users,
  //       { foreignKey: 'userid', as: 'blogposts' });
  // };

  return BlogPost;
}