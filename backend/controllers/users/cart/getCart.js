const Product = require('../../../models/Product');
const User = require('../../../models/User');

const getCart = async (req, res) => {
    if (req.body.userId && req.body.userId !== null) {
      try {
        const user = await User.findById(req.body.userId);
        if (!user) {
          res.status(403).json('User not found');
        } else {
          res.status(200).json(user.cartItems);
        }
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(400).json('Invalid request');
    }
  };
  

module.exports = getCart