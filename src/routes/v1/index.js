const express = require('express');
const { InfoController } = require('../../controllers');
const airplaneRouter = require('./airplane.routes');

const v1Router = express.Router();

v1Router.use('/airplanes', airplaneRouter);
v1Router.get('/info', InfoController.info);

module.exports = v1Router;