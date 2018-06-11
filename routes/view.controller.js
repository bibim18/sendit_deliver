import { deliversend , car ,company , typeCar  } from '../connect';

import route from 'koa-router'
const router = new route();

   router.get('/:page', async(ctx) => {
    let tt = ctx.params.page
    let gg = parseInt(tt) //แปลง string เป็น integer
     console.log(tt)
    let data = await deliversend.findAll({
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
                   attributes: ['licensePlate','hourCar','weight','fuelType','brand'],
                }
            ],
            attributes: ['dateSend','capacity'],
            //pagination จัดให้มี 7 rows/page
            limit:7,
            offset : 7*(gg-1),
            order : ['detailSendId']
        })
    ctx.body = data
})

module.exports = router