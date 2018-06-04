'use strict';
//const type = require('./20171226112045-create-type_car')
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('car', {
      carID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      licensePlate: {
        type: Sequelize.STRING
      },
      hourCar: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.INTEGER
      },
      typeCarID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
            model: 'typeCar',
            key: 'typeCarID'
        }
      },
      fuelType: {
        type: Sequelize.STRING
      },
      brand: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('car');
  }
};