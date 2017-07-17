/**
 * Created by Ed on 7/16/2017.
 */
const carapi = require('express').Router();
const models = require('./models');
const cars = require('./cars');

carapi.use('/cars', cars);
carapi.use('/models', models);

carapi.get('/', (req,res) => {
    res.status(200).json({ message: 'Cars API' });
});

module.exports = carapi;