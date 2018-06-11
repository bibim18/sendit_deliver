import { deliversend , car ,company , typeCar  } from '../connect';

import route from 'koa-router'
const router = new route();

router.post('/:id',async(ctx) => {
    const {licensePlate,hourCar,weight,typeCarID,fuelType,brand, dateSend, capacity, companyID, carID  } = ctx.request.body
    let deliverId = ctx.params.id
    let checkId = await deliversend.findOne({"where" : {detailSendID : deliverId}})
    
        if(weight > 0 || capacity >0 ){
            try{let idDeliver = await deliversend.findOne({"where" : {detailSendID : deliverId}})
                let data = await car.update({ licensePlate, hourCar, weight, typeCarID, fuelType, brand },{where : {"carID":idDeliver.carID}})
                data = await deliversend.update({dateSend,capacity,companyID,"carID":idDeliver.carID },{where : {"detailSendID":deliverId}})
                ctx.body = data
            }catch(err) {
                ctx.status = 404;
                ctx.body = "PK DeliverSend " + deliverId + " is not found"
            }
        }else {
            ctx.status = 404;
            ctx.body = "weight more than 0"
        }
})

module.exports = router