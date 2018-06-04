'use strict'

module.exports = (sequelize, DataTypes) => { 
    const car = sequelize.define('car',{
        carID: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        licensePlate : {
            type: DataTypes.STRING,
            allowNull:true
        },
        hourCar : {
            type: DataTypes.STRING,
            allowNull:true
        },
        weight : {
            type: DataTypes.INTEGER,
            allowNull:true
        },
        typeCarID : {
            type: DataTypes.INTEGER,
            allowNull:true
        },
        fuelType : {
            type: DataTypes.STRING,
            allowNull:true
        },
        brand : {
            type: DataTypes.STRING,
            allowNull:true
        }
    },{
        tableName: 'car',
        timestamp: false
    });
    return car
}; 