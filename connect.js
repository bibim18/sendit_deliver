'use strict'

import Sequelize from 'sequelize';  
require('dotenv').config()
const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USERNAME, process.env.DATABASE_PASSWORD, {  
  dialect: process.env.DATABASE_DIALECT,
});

// Connect all the models/tables in the database to a db object, 
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;  
db.sequelize = sequelize;

//Models/tables
db.car = require('./models/car.js')(sequelize, Sequelize);  
db.company = require('./models/company.js')(sequelize, Sequelize);  
db.deliversend = require('./models/deliverSend.js')(sequelize, Sequelize); 
db.typeCar = require('./models/typeCar.js')(sequelize, Sequelize); 

//Relations

//association
db.company.hasMany(db.deliversend,{foreignKey: 'companyID'});  
db.car.hasMany(db.deliversend,{foreignKey: 'carID'});  
db.deliversend.belongsTo(db.car,{foreignKey: 'carID'});  
db.deliversend.belongsTo(db.company,{foreignKey: 'companyID'});  
db.typeCar.hasMany(db.car,{foreignKey: 'typeCarID'});
db.car.belongsTo(db.typeCar,{foreignKey: 'typeCarID'});  

module.exports = db;  