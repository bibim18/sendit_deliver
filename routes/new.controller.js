import { deliversend , car } from '../connect';

import route from 'koa-router'
const router = new route();

    router.post('/', async(ctx) => {
        let countdeliver = await deliversend.findAndCountAll()
        const {licensePlate,hourCar,weight,typeCarID,fuelType,brand, dateSend, capacity, companyID} = ctx.request.body
        let data = await car.create({ licensePlate, hourCar, weight, typeCarID, fuelType, brand })
        let IDcar = await car.findOne({"where": {"licensePlate":licensePlate}})

        data = await deliversend.create({ "detailSendID" : countdeliver.count+1,"dateSend":dateSend,"capacity":capacity,"companyID":companyID,"carID":IDcar.carID })
      ctx.body = data
    })

module.exports = router