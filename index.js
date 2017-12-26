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

sql.query("Select * from company", { type: sql.QueryTypes.SELECT }).then(myTableRows => {
    console.log(myTableRows);
})

const company = sql.define('company',{
        id_company: {
            type : db.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name_company : {
            type: db.STRING(40),
            allowNull:true
        }
    },{
        tableName: 'company',
        timestamp: false
    })

router.get('/com',async(ctx)=>{
    let date = await company.findAll()
    ctx.body = date
})
app.listen(3000);