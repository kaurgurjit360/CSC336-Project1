'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Albums', [
    {
      id: '1',
      album_name: 'My Way',
      createdAt: new Date(),
      updatedAt: new Date()
      },
     {
    id: '2',
    album_name: 'Ulimate Sinatra',
    createdAt: new Date(),
    updatedAt: new Date()
    },
    {
      id: '3',
      album_name: 'Whitney',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Albums', null, {});
  }
};
