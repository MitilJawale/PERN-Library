'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('books', {
      isbn: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      author: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      category: {
        type: Sequelize.STRING
      },
      availability: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      publisher: {
        type: Sequelize.STRING
      },
      publication_date: {
        type: Sequelize.DATE
      },
      ratings: {
        type: Sequelize.INTEGER,
        validate: {
          min: 0,
          max: 5
        }
      },
      page_count: {
        type: Sequelize.INTEGER
      },
      cover_image: {
        type: Sequelize.TEXT
      },
      borrowed_at: {
        type: Sequelize.DATE
      },
      borrowed_by: {
        type: Sequelize.STRING
      },
      
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('books');
  }
};

