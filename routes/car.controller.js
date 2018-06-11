import { car } from '../connect';

import route from 'koa-router'
const router = new route();

router.get('/',async(ctx) => {
    let data = await car.findAll()
    ctx.body = data
})

module.exports = router