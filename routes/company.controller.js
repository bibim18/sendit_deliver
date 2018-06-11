import { company } from '../connect';

import route from 'koa-router'
const router = new route();

router.get('/',async(ctx) => {
    let data = await company.findAll()
    ctx.body = data
})
router.post('/', async(ctx) => {
    const {licensePlate, } = ctx.request.body
    console.log(licensePlate)
    let data = await car.create({licensePlate })
    ctx.body = data
})

module.exports = router