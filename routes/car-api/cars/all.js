/**
 * Created by Ed on 7/16/2017.
 */

const data = require('../../../data/car-api/data.json');

module.exports = (req, res) => {
  const cars = data.cars;

  res.status(200).json({ cars });
};