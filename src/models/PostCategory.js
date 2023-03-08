module.exports = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      foreignKey: 'postId', 
      as: 'blog_posts',
      through: PostCategory,
      otherKey: 'categoryId',
    });
    models.BlogPost.belongsToMany(models.Category, {
      foreignKey: 'categoryId',
      as: 'categories',
      through: PostCategory,
      otherKey: 'postId',
    });
  };

  return PostCategory;
}