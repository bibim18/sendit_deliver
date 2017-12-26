'use strict';
module.exports = (sequelize, DataTypes) => {
  var company = sequelize.define('company', {
    name_company: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return company;
};