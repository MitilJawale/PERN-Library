'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_ratings', {
      u_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'user_id'
        },
        primaryKey: true
      },
      book_isbn: {
        type: Sequelize.INTEGER,
        references: {
          model: 'books',
          key: 'isbn'
        },
        primaryKey: true
      },
      ratings: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
          max: 5
        }
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('user_ratings');
  }
};
