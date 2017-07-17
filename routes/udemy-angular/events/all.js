/**
 * Created by Ed on 7/16/2017.
 */
const data = require('../../../data/udemy-angular/data.json');

module.exports = (req,res) => {
    res.status(200).json(data);
};