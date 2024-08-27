const express = require('express');

const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const airplaneRouter = express.Router();

// /api/v1/airplanes POST
airplaneRouter.post('/', 
        AirplaneMiddlewares.validateCreateRequest,
        AirplaneController.createAirplane);

// /api/v1/airplanes GET
airplaneRouter.get('/', AirplaneController.getAirplanes);

// /api/v1/airplanes/:id GET
airplaneRouter.get('/:id', AirplaneController.getAirplane);

// /api/v1/airplanes/:id DELETE
airplaneRouter.delete('/:id', AirplaneController.destroyAirplane);

module.exports = airplaneRouter;