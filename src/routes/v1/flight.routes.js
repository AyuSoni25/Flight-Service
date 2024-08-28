const express = require('express');

const { FlightController } = require('../../controllers');
const { FlightMiddleware } = require('../../middlewares');

const flightRouter = express.Router();

// /api/v1/flights POST
flightRouter.post('/', 
        FlightMiddleware.validateCreateRequest,
        FlightController.createFlight);

module.exports = flightRouter;