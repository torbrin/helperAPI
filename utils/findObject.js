/**
 * Created by Ed on 7/16/2017.
 */
const data = require('../data/car-api/data.json');

module.exports = type => {
  return (req, res, next, value) => {
    const typePlural = `${type}s`;
    const obj = data[typePlural].find(t => t.id === (value * 1));

    if (obj) {
        req[type] = obj;
        next();
    } else {
        res.status(404).send(`Invalid ${type} ID`);
    }
  };
};