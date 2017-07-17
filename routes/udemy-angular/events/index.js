/**
 * Created by Ed on 7/16/2017.
 */
const events = require('express').Router();
const all = require('./all');

events.get('/', all);

module.exports = events;