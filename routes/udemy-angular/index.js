/**
 * Created by Ed on 7/16/2017.
 */
const angularapi = require('express').Router();
const events = require('./events');

angularapi.use('/events', events);

angularapi.get('/', (req, res) => {
    res.status(200).json({ message: 'Udemy Angular2 Course API' });
});

module.exports = angularapi;