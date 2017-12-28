CREATE DATABASE sendit_deliver CHARACTER SET utf8 COLLATE utf8_general_ci;

use sendit_deliver;

select * from company;
select * from car;
select * from deliversend;
select * from typeCar;

select nameCompany,licensePlate,nameTypeCar,hourCar,capacity,weight from deliversend as d
join company as cp on d.companyID = cp.companyID
join car as c on d.carID = c.carID
join typeCar as tc on c.typecarID = tc.typecarID
;