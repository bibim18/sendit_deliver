const db = require('sequelize')
const koa = require('koa');
const body = require('koa-bodyparser');
const route = require('koa-router');
const app = new koa();
const router = new route();

app.use(body())
app.use(router.allowedMethods())
app.use(router.routes())

const sql = new db ('sendit_deliver','root','12345678', {
    dialect : 'mysql'
})

//company
const company = sql.define('company',{
        companyID: {
            type : db.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameCompany : {
            type: db.STRING(40),
            allowNull:true
        }
    },{
        tableName: 'company',
        timestamp: false
    })

router.get('/comp',async(ctx)=>{
    let date = await company.findAll()
    ctx.body = date
})

router.post('/comp', async(ctx) => {
    const {nameCompany} = ctx.request.body
    console.log(nameCompany)
    let data = await company.create({nameCompany })
    ctx.body = data
  })
  //end company

  //typeCar
const typeCar = sql.define('typeCar',{
    typeCarID: {
        type : db.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nameTypeCar : {
        type: db.STRING(10),
        allowNull:true
    }
},{
    tableName: 'typeCar',
    timestamp: false
})

router.get('/typec',async(ctx)=>{
let data = await typeCar.findAll()
ctx.body = data
})

router.post('/typec', async(ctx) => {
const {nameTypeCar} = ctx.request.body
console.log(nameTypeCar)
let data = await typeCar.create({nameTypeCar })
ctx.body = data
})
//end typeCar
 
//car
const car = sql.define('car',{
    carID: {
        type : db.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    licensePlate : {
        type: db.STRING,
        allowNull:true
    },
    hourCar : {
        type: db.STRING,
        allowNull:true
    },
    weight : {
        type: db.INTEGER,
        allowNull:true
    },
    typeCarID : {
        type: db.INTEGER,
        allowNull:true
    }
},{
    tableName: 'car',
    timestamp: false
})

router.get('/car',async(ctx)=>{
let data = await car.findAll()
ctx.body = data
})

router.post('/car', async(ctx) => {
const {licensePlate,hourCar,weight,typeCarID} = ctx.request.body
console.log(licensePlate,hourCar,weight,typeCarID)
let data = await car.create({licensePlate,hourCar,weight,typeCarID })
ctx.body = data
})
//end car

//deliversend
const deliversend = sql.define('deliversend',{
    detailSendID: {
        type : db.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    dateSend : {
        type: db.DATE,
        allowNull:true
    },
    capacity : {
        type: db.INTEGER,
        allowNull:true
    },
    companyID : {
        type: db.INTEGER,
        allowNull:true
    },
    carID : {
        type: db.INTEGER,
        allowNull:true
    }
},{
    tableName: 'deliversend',
    timestamp: false
})

router.get('/deliver',async(ctx)=>{
let data = await deliversend.findAll()
ctx.body = data
})

router.post('/deliver', async(ctx) => {
const {dateSend,capacity,companyID,carID} = ctx.request.body
console.log(dateSend,capacity,companyID,carID)
let data = await deliversend.create({dateSend,capacity,companyID,carID})
ctx.body = data
})
//end deliversend

//association
 company.hasMany(deliversend,{foreignKey: 'companyID'});  
 car.hasMany(deliversend,{foreignKey: 'carID'});  
 deliversend.belongsTo(car,{foreignKey: 'carID'});  
 deliversend.belongsTo(company,{foreignKey: 'companyID'});  
 typeCar.hasMany(car,{foreignKey: 'typeCarID'});
 car.belongsTo(typeCar,{foreignKey: 'typeCarID'});  

 //showQuery
router.get('/showR', async(ctx) => {
    let data = await deliversend.findAll(
       {
            include: [ //join 
                {
                    model: company,
                    attributes: ['nameCompany']
                },
               { 
                   model: car,
                   include: [ //join
                    { 
                        model: typeCar,
                        attributes: ['nameTypeCar']
                    }
                   ],
                   attributes: ['licensePlate','weight']
                }
            ],
            attributes: ['dateSend','capacity']
        }
    )
    ctx.body = data
}
)

app.listen(3000);