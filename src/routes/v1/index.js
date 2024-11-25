const express = require('express');
const { InfoController } = require('../../controllers');
const airplaneRouter = require('./airplane.routes');
const cityRouter = require('./city.routes');
const airportRouter = require('./airport.routes');
const flightRouter = require('./flight.routes');

const v1Router = express.Router();

v1Router.use('/airplanes', airplaneRouter);
v1Router.use('/airports', airportRouter);
v1Router.use('/flights', flightRouter);
v1Router.use('/cities', cityRouter);
v1Router.get('/info', InfoController.info);

module.exports = v1Router;