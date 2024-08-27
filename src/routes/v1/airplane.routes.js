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

// /api/v1/airplanes/:id PATCH
airplaneRouter.patch('/:id', AirplaneController.updateAirplane);

module.exports = airplaneRouter;