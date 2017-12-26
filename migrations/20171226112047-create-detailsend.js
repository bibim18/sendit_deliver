'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('deliversend', {
        detailSendID: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dateSend: {
        type: Sequelize.DATE
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      companyID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'company',
          key: 'companyID'
      }
      },
      carID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'car',
          key: 'carID'
      }
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
    return queryInterface.dropTable('type_car');
  }
};