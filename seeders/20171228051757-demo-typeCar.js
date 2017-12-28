'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('typeCar', 
    [  {
      nameTypeCar: '6 ล้อทึบ',
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      nameTypeCar: '4 ล้อทึบ',
      createdAt: new Date(),
      updatedAt: new Date()
  }]
    , {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('typeCar', null, {});
    
  }
};
