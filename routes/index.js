const express = require('express');
const router = express.Router();
const cars = require('./car-api');
const udemyangular = require('./udemy-angular');

/* Cars API */
router.use('/car-api', cars);

/* Events data for Udemy Angular */
router.use('/udemy-angular', udemyangular);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.status(200).json({ message: 'Connected!' });
});

module.exports = router;
