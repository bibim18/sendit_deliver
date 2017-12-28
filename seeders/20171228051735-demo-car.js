'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('car', 
    [ {
      licensePlate: '3กย-1121',
      hourCar: '24 ชม. (จ-ส)',
      weight: 1900,
      typeCarID: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      licensePlate: '3กย-1122',
      hourCar: '24 ชม. (จ-ส)',
      weight: 1900,
      typeCarID: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      licensePlate: '3กย-1123',
      hourCar: '24 ชม. (จ-ส)',
      weight: 1900,
      typeCarID: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      licensePlate: '3กย-1124',
      hourCar: '24 ชม. (จ-ส)',
      weight: 1900,
      typeCarID: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      licensePlate: '3กย-1125',
      hourCar: '8 ชม. (จ-ส)',
      weight: 1900,
      typeCarID: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      licensePlate: '3กย-1126',
      hourCar: '8 ชม. (จ-ส)',
      weight: 1500,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      licensePlate: '3กย-1127',
      hourCar: '8 ชม. (จ-อา)',
      weight: 1300,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      licensePlate: '3กย-1128',
      hourCar: '8 ชม. (จ-อา)',
      weight: 1500,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      licensePlate: '3กย-1129',
      hourCar: '',
      weight: 1300,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {

      licensePlate: 'กย-1120',
      hourCar: '8 ชม. (จ-ส)',
      weight: 2000,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {

      licensePlate: 'กย-1121',
      hourCar: '24 ชม. (จ-อา)',
      weight: 1900,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      licensePlate: 'กย-1122',
      hourCar: '07.00-18.00',
      weight: 1900,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      licensePlate: 'กย-1123',
      hourCar: '07.00-18.00',
      weight: 1900,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      licensePlate: 'กย-1124',
      hourCar: '07.00-18.00',
      weight: 1900,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
  }]
    , {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('car', null, {});
  }
};
