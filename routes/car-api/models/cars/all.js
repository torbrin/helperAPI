/**
 * Created by Ed on 7/16/2017.
 */
const data = require('../../../../data/car-api/data.json');

module.exports = (req, res) => {
  const modelId = req.params.modelId * 1;
  const cars = data.cars.filter(c => c.modelId === modelId);

  res.status(200).json({ cars });
};