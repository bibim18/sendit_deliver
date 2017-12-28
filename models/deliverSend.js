'use strict'

module.exports = (sequelize, DataTypes) => { 
    const deliversend = sequelize.define('deliversend',{
        detailSendID: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        dateSend : {
            type: DataTypes.DATE,
            allowNull:true
        },
        capacity : {
            type: DataTypes.INTEGER,
            allowNull:true
        },
        companyID : {
            type: DataTypes.INTEGER,
            allowNull:true
        },
        carID : {
            type: DataTypes.INTEGER,
            allowNull:true
        }
    },{
        tableName: 'deliversend',
        timestamp: false
    });
    return deliversend
}; 