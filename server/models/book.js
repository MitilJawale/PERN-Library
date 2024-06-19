module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    isbn: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT
    },
    category: {
      type: DataTypes.STRING
    },
    availability: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    publisher: {
      type: DataTypes.STRING
    },
    publication_date: {
      type: DataTypes.DATE
    },
    ratings: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 5
      }
    },
    page_count: {
      type: DataTypes.INTEGER
    },
    cover_image: {
      type: DataTypes.TEXT
    },
    borrowed_at: {
      type: DataTypes.DATE
    },
    borrowed_by: {
      type: DataTypes.STRING
    }
  }, {
    tableName: 'books',
    timestamps: false,
  });

  return Book;
};