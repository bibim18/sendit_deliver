'use strict'

module.exports = (sequelize, DataTypes) => { 
    const company = sequelize.define('company',{
        companyID: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameCompany : {
            type: DataTypes.STRING(40),
            allowNull:true
        }
    },{
        tableName: 'company',
        timestamp: false
    });
    return company
}; 