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
      fuelType : 'Diesel',
      brand : 'Isuzu'
  },
  {
      licensePlate: '3กย-1122',
      hourCar: '24 ชม. (จ-ส)',
      weight: 1900,
      typeCarID: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
      fuelType : 'Diesel',
      brand : 'Isuzu'
  },
  {
      licensePlate: '3กย-1123',
      hourCar: '24 ชม. (จ-ส)',
      weight: 1900,
      typeCarID: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
      fuelType : 'Diesel',
      brand : 'Toyota'
  },
  {
      licensePlate: '3กย-1124',
      hourCar: '24 ชม. (จ-ส)',
      weight: 1900,
      typeCarID: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
      fuelType : 'Gasoline',
      brand : 'Toyota'
  },
  {
      licensePlate: '3กย-1125',
      hourCar: '8 ชม. (จ-ส)',
      weight: 1900,
      typeCarID: 1,
      createdAt : new Date(),
      updatedAt : new Date(),
      fuelType : 'Gasoline',
      brand : 'Ford'
  },
  {
      licensePlate: '3กย-1126',
      hourCar: '8 ชม. (จ-ส)',
      weight: 1500,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
      fuelType : 'Methanol',
      brand : 'Ford'
  },
  {
      licensePlate: '3กย-1127',
      hourCar: '8 ชม. (จ-อา)',
      weight: 1300,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
      fuelType : 'Methanol',
      brand : 'Honda'
  },
  {
      licensePlate: '3กย-1128',
      hourCar: '8 ชม. (จ-อา)',
      weight: 1500,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
      fuelType : 'Natural Gas',
      brand : 'Honda'
  },
  {
      licensePlate: '3กย-1129',
      hourCar: '',
      weight: 1300,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
      fuelType : 'Natural Gas',
      brand : 'Volvo'
  },
  {

      licensePlate: 'กย-1120',
      hourCar: '8 ชม. (จ-ส)',
      weight: 2000,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
      fuelType : 'Hydrogen',
      brand : 'Volvo'
  },
  {

      licensePlate: 'กย-1121',
      hourCar: '24 ชม. (จ-อา)',
      weight: 1900,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
      fuelType : 'Hydrogen',
      brand : 'Kenworth'
  },
  {
      licensePlate: 'กย-1122',
      hourCar: '07.00-18.00',
      weight: 1900,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
      fuelType : 'Hydrogen',
      brand : 'Kenworth'
  },
  {
      licensePlate: 'กย-1123',
      hourCar: '07.00-18.00',
      weight: 1900,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
      fuelType : 'Biodiesel',
      brand : 'Kenworth'
  },
  {
      licensePlate: 'กย-1124',
      hourCar: '07.00-18.00',
      weight: 1900,
      typeCarID: 2,
      createdAt : new Date(),
      updatedAt : new Date(),
      fuelType : 'Biodiesel',
      brand : 'Honda'
  }]
    , {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('car', null, {});
  }
};
