const db = require('sequelize')
const koa = require('koa');
const cors = require('koa-cors');
const body = require('koa-bodyparser');
const route = require('koa-router');
const app = new koa();
const router = new route();

app.use(cors());
app.use(body())


const sql = new db ('sendit_deliver','root','12345678', {
    dialect : 'mysql'
})

const conn = {};
conn.db = db;  //db is sequelize
conn.sql = sql; //sql is connect to database mysql

//Models/tables
conn.car = require('./models/car.js')(sql, db);  
conn.company = require('./models/company.js')(sql, db);  
conn.typeCar = require('./models/typeCar.js')(sql, db);
conn.deliversend = require('./models/deliverSend.js')(sql, db);

//company
    //select * from company
    router.get('/comp', async(ctx) => {
        let data = await conn.company.findAll()
        ctx.body = data
    })
     router.post('/comp', async(ctx) => {
        const {licensePlate, } = ctx.request.body
        console.log(licensePlate)
        let data = await conn.car.create({licensePlate })
        ctx.body = data
    })
//end company

//typeCar
    //select * from typeCar
    router.get('/typeCar', async(ctx) => {
        let data = await conn.typeCar.findAll()
        ctx.body = data
    })
//end typeCar
 
//car
    //select * from car
    router.get('/car',async(ctx) => {
        let data = await conn.car.findAll()
        ctx.body = data
    })
//end car

//deliversend
    //select * from deliverSend
    router.get('/deliver',async(ctx) => {
        let data = await conn.deliversend.findAll()
        ctx.body = data
    })
//end deliversend

//insert new vehicel
    router.post('/new', async(ctx) => {
        const {licensePlate,hourCar,weight,typeCarID,fuelType,brand, dateSend, capacity, companyID, carID  } = ctx.request.body
        let data = await conn.car.create({ licensePlate, hourCar, weight, typeCarID, fuelType, brand })
        let IDcar = await conn.car.findOne({"where": {"licensePlate":licensePlate}})

        data = await conn.deliversend.create({ "dateSend":dateSend,"capacity":capacity,"companyID":companyID,"carID":IDcar.carID })
      ctx.body = data
    })
//end insert new vehicel

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

//obj of operation   
const Op = db.Op; 

router.get('/vehical/:page', async(ctx) => {
    let tt = ctx.params.page
    let gg = parseInt(tt) //แปลง string เป็น integer
     console.log(tt)
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
                   attributes: ['licensePlate','hourCar','weight'],
                }
            ],
            attributes: ['dateSend','capacity'],
            //pagination จัดให้มี 7 rows/page
            limit:7,
            offset : 7*(gg-1)
        })
    ctx.body = data
})
//end vahicel pagination

router.get('/vehical', async(ctx) => {
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
                   attributes: ['licensePlate','hourCar','weight'],
                }
            ],
            attributes: ['dateSend','capacity'],
        })
    ctx.body = data
})
//end vahicel all

router.post('/edit/:id',async(ctx) => {
    const {licensePlate,hourCar,weight,typeCarID,fuelType,brand, dateSend, capacity, companyID, carID  } = ctx.request.body
    let deliverId = ctx.params.id
    let checkId = await conn.deliversend.findOne({"where" : {detailSendID : deliverId}})
    
        if(weight != 0){
            try{let idDeliver = await conn.deliversend.findOne({"where" : {detailSendID : deliverId}})
                let data = await conn.car.update({ licensePlate, hourCar, weight, typeCarID, fuelType, brand },{where : {"carID":idDeliver.carID}})
                data = await conn.deliversend.update({dateSend,capacity,companyID,"carID":idDeliver.carID },{where : {"detailSendID":deliverId}})
           }catch(err) {
                ctx.status = 404;
                ctx.body = "PK DeliverSend " + deliverId + " is not found"
            }
        }else {
            ctx.status = 404;
            ctx.body = "weight not 0"
        }
    
})
//end edit
app.use(router.routes())
app.use(router.allowedMethods())

app.listen(5000);
