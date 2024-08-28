const express = require('express');

const { AirportController } = require('../../controllers');
const { AirportMiddleware } = require('../../middlewares');

const airportRouter = express.Router();

// /api/v1/airports POST
airportRouter.post('/', 
        AirportMiddleware.validateCreateRequest,
        AirportController.createAirport);

// /api/v1/airports GET
airportRouter.get('/', 
    AirportController.getAirports);

// /api/v1/airports/:id GET
airportRouter.get('/:id', 
    AirportController.getAirport);

// /api/v1/airports/:id DELETE
airportRouter.delete('/:id', 
    AirportController.destroyAirport);

// /api/v1/airports/:id PATCH
airportRouter.patch('/:id', 
    AirportController.updateAirport);

module.exports = airportRouter;