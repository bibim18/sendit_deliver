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

const conn = {};
conn.db = db;  
conn.sql = sql;

//Models/tables
conn.car = require('./models/car.js')(sql, db);  
conn.company = require('./models/company.js')(sql, db);  
conn.typeCar = require('./models/typeCar.js')(sql, db);
conn.deliversend = require('./models/deliverSend.js')(sql, db);

//company
    //select * from company
    router.get('/comp',async(ctx)=>{
        let date = await conn.company.findAll()
        ctx.body = date
    })
    //insert into company (nameCompany) values (value from JSON)
    router.post('/comp', async(ctx) => {
        const {nameCompany} = ctx.request.body
        console.log(nameCompany)
        let data = await conn.company.create({nameCompany })
        ctx.body = data
    })
//end company

//typeCar
    //select * from typeCar
    router.get('/typec',async(ctx)=>{
    let data = await conn.typeCar.findAll()
    ctx.body = data
    })
    //insert into typeCar (nameTypeCar) values (value from JSON)
    router.post('/typec', async(ctx) => {
    const {nameTypeCar} = ctx.request.body
    console.log(nameTypeCar)
    let data = await conn.typeCar.create({nameTypeCar })
    ctx.body = data
    })
//end typeCar
 
//car
    //select * from car
    router.get('/car',async(ctx)=>{
    let data = await conn.car.findAll()
    ctx.body = data
    })
    //insert into car (licensePlate,hourCar,weight,typeCarID) values (value from JSON)
    router.post('/car', async(ctx) => {
    const {licensePlate,hourCar,weight,typeCarID} = ctx.request.body
    console.log(licensePlate,hourCar,weight,typeCarID)
    let data = await conn.car.create({licensePlate,hourCar,weight,typeCarID })
    ctx.body = data
    })
//end car

//deliversend
    //select * from deliverSend
    router.get('/deliver',async(ctx)=>{
    let data = await conn.deliversend.findAll()
    ctx.body = data
    })
    //insert into deliverSent (dateSend,capacity,companyID,carID) values (value from JSON)
    router.post('/deliver', async(ctx) => {
    const {dateSend,capacity,companyID,carID} = ctx.request.body
    console.log(dateSend,capacity,companyID,carID)
    let data = await conn.deliversend.create({dateSend,capacity,companyID,carID})
    ctx.body = data
    })
//end deliversend

//association
 conn.company.hasMany(conn.deliversend,{foreignKey: 'companyID'});  
 conn.car.hasMany(conn.deliversend,{foreignKey: 'carID'});  
 conn.deliversend.belongsTo(conn.car,{foreignKey: 'carID'});  
 conn.deliversend.belongsTo(conn.company,{foreignKey: 'companyID'});  
 conn.typeCar.hasMany(conn.car,{foreignKey: 'typeCarID'});
 conn.car.belongsTo(conn.typeCar,{foreignKey: 'typeCarID'});  

//showQuery
    // select * from deliversend
    // join company using (companyID) 
    // join car using (carID)
    // join typeCar using (typeCarID);
router.get('/showR', async(ctx) => {
    let data = await conn.deliversend.findAll(
       {
            include: [ //join 
                {
                    model: conn.company,
                    attributes: ['nameCompany']
                },
               { 
                   model: conn.car,
                   include: [ //join
                    { 
                        model: conn.typeCar,
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
//end showQuery

app.listen(3000);