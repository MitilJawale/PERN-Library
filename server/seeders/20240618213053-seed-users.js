'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'librarian@gmail.com',
        password: '$2y$10$Ao11n5CwypSVLy51s4TAI.GYafgWLTaUVeGQ0SLkHmL9.9J6V1V0u',
        role: 'librarian',
        
      },
      {
        email: 'mitil@gmail.com',
        password: '$2y$10$VofeZJ7u38/ZY9gIfF/.SuD/79/q3Y41NQzuMLl4C7jxUIDAEUl.u',
        role: 'student',
        
      },
      {
        email: 'dave@gmail.com',
        password: '$2y$10$uAECHwTdWuCptsLIpbR0WOT1EBcESDojmi5VeLD.G4UMPtAb5PBh.',
        role: 'student',
        
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};


