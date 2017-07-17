/**
 * Created by Ed on 7/16/2017.
 */
const cars = require('express').Router();
const all = require('./all');
const single = require('./single');
const findObjecct = require('../../../utils/findObject');

cars.param('carId', findObjecct('car'));

cars.get('/', all);
cars.get('/:carId', single);

module.exports = cars;