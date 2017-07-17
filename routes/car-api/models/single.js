/**
 * Created by Ed on 7/16/2017.
 */

module.exports = (req, res) => {
  const model = req.model;

  res.status(200).json({ model });
};