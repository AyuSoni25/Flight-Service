const CrudRepository = require('./crud.repository');
const { Flight, Airplane, Airport, City } = require('../models');
const { Sequelize } = require('sequelize');
const db = require('../models');
const { addRowLockOnFlights } = require('./queries');

// ORM is definitely good, but we cannot use it for some complex operations
// and we should always look for the query it is running behind, to check if it the most
// optimal one, because in some cases the ORM is not optimal and performs slow.

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight);
    }

    async getAllFlights(filter, sort) {
        const response = await Flight.findAll({
            where: filter,
            order: sort,
            include: [
                {
                    model: Airplane,
                    required: true,
                    as: 'airplaneDetail'
                },
                {
                    model: Airport,
                    required: true,
                    as: 'departureAirport',
                    on : {
                        col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departureAirport.code"))
                    },
                    include: {
                        model: City,
                        required: true
                    }
                },
                {
                    model: Airport,
                    required: true,
                    as: 'arrivalAirport',
                    on : {
                        col1: Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                    },
                    include: {
                        model: City,
                        required: true
                    }
                }
            ]
        });
        return response;
    }

    async updateRemainingSeats(flightId, seats, dec = true) {
        await db.sequelize.query(addRowLockOnFlights(flightId));
        const flight = await Flight.findByPk(flightId);
        if(parseInt(dec)) {
            await flight.decrement('totalSeats', {by: seats});
        } else {
            await flight.increment('totalSeats', {by: seats});
        }
        return flight;
    }
}

module.exports = FlightRepository;