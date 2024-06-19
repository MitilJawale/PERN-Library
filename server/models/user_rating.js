module.exports = (sequelize, DataTypes) => {
  const UserRating = sequelize.define('UserRating', {
    u_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'user_id'
      },
      allowNull: false,
      primaryKey: true
    },
    book_isbn: {
      type: DataTypes.INTEGER,
      references: {
        model: 'books',
        key: 'isbn'
      },
      allowNull: false,
      primaryKey: true
    },
    ratings: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      }
    }
  }, {
    tableName: 'user_ratings',
    timestamps: false,
  });

  return UserRating;
};