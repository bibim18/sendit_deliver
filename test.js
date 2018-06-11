import koa from 'koa'
import cors from 'koa-cors'
import body from 'koa-bodyparser'

import car from './routes/car.controller'
import typeCar from './routes/typeCar.controller'
import company from './routes/company.controller'
import deliversend from './routes/deliver.controller'
import news from './routes/new.controller'
import view from './routes/view.controller'
import edit from './routes/edit.controller'

import route from 'koa-router'
const router = new route();

const app = new koa();
require('dotenv').config()

router.use('/car',car.routes());
router.use('/typeCar',typeCar.routes());
router.use('/comp',company.routes());
router.use('/deliver',deliversend.routes());
router.use('/new',news.routes())
router.use('/view',view.routes())
router.use('/edit',edit.routes())

app.use(cors());
app.use(body()); 
app.use(router.routes());
app.use(router.allowedMethods());


app.listen(process.env.PORT);
