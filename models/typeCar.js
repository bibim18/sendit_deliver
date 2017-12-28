'use strict'

module.exports = (sequelize, DataTypes) => { 
    const typeCar = sequelize.define('typeCar',{
        typeCarID: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameTypeCar : {
            type: DataTypes.STRING(10),
            allowNull:true
        }
    },{
        tableName: 'typeCar',
        timestamp: false
    });
    return typeCar
}; 