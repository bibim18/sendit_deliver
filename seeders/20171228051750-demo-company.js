'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('company', 
    [ {
      nameCompany: 'CPF',
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      nameCompany: 'Chia Tai (Seed)',
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      nameCompany: 'CPRAM',
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      nameCompany: 'Chia Tai (Fertilizer)',
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      nameCompany: 'KCP',
      createdAt : new Date(),
      updatedAt : new Date(),
  },
  {
      nameCompany: 'CPPC',
      createdAt : new Date(),
      updatedAt : new Date(),
  }]
    , {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('company', null, {});
  }
};
