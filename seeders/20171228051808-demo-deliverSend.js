'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('deliversend', [
        {
          dateSend: '2017-12-27',
          capacity: 395,
          companyID: 1,
          carID: 1,
          createdAt : new Date(),
          updatedAt : new Date(),
      },
      {
          dateSend: '2017-12-27',
          capacity: 500,
          companyID: 2,
          carID: 2,
          createdAt : new Date(),
          updatedAt : new Date(),
      },
      {
          dateSend: '2017-12-27',
          capacity: 440,
          companyID: 3,
          carID: 3,
          createdAt : new Date(),
          updatedAt : new Date(),
      },
      {
          dateSend: '2017-12-27',
          capacity: 380,
          companyID: 1,
          carID: 4,
          createdAt : new Date(),
          updatedAt : new Date(),
      },
      {
          dateSend: '2017-12-27',
          capacity: 500,
          companyID: 1,
          carID: 5,
          createdAt : new Date(),
          updatedAt : new Date(),
      },
      {
          dateSend: '2017-12-27',
          capacity: 490,
          companyID: 4,
          carID: 6,
          createdAt : new Date(),
          updatedAt : new Date(),
      },
      {
          dateSend: '2017-12-27',
          capacity: 480,
          companyID: 5,
          carID: 7,
          createdAt : new Date(),
          updatedAt : new Date(),
      },
      {
          dateSend: '2017-12-27',
          capacity: 480,
          companyID: 6,
          carID: 8,
          createdAt : new Date(),
          updatedAt : new Date(),
      },
      {
          dateSend: '2017-12-27',
          capacity: 440,
          companyID: 1,
          carID: 9,
          createdAt : new Date(),
          updatedAt : new Date(),
      },
      {
          dateSend: '2017-12-27',
          capacity: 395,
          companyID: 1,
          carID: 10,
          createdAt : new Date(),
          updatedAt : new Date(),
      },
      {
          dateSend: '2017-12-27',
          capacity: 500,
          companyID: 1,
          carID: 11,
          createdAt : new Date(),
          updatedAt : new Date(),
      },
      {
          dateSend: '2017-12-27',
          capacity: 440,
          companyID: 1,
          carID : 12,
          createdAt : new Date(),
          updatedAt : new Date(),
      },
      {
          dateSend: '2017-12-27',
          capacity: 380,
          companyID: 1,
          carID: 13,
          createdAt : new Date(),
          updatedAt : new Date(),
      },
      {
          dateSend: '2017-12-27',
          capacity: 500,
          companyID: 1,
          carID: 14,
          createdAt : new Date(),
          updatedAt : new Date(),
      }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('deliversend', null, {});
  }
};
