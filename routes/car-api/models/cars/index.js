/**
 * Created by Ed on 7/16/2017.
 */
const cars = require('express').Router({ mergeParams: true });
const all = require('./all');

cars.get('/', all);

module.exports = cars;