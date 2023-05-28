const Order = require('../../../models/Order')
const User = require('../../../models/User')
const Product = require('../../../models/Product')

const createOrder = async (req, res) => {
    if (req.body.userId) {
      try {
        
        const user = await User.findById(req.body.userId);
  
        if (user) {
          if (req.body.city || 
            req.body.price ||
            req.body.landMark||
            req.body.city||
            req.body.pincode||
            req.body.isPaid||
            req.body.paymentMethod
            ) {
            let orderItems = user.cartItems || [];
  
            if (orderItems.length === 0) {
              return res.status(400).json('Cart is empty. Add items to your cart before creating an order.');
            }
  
            const data = {
              userId: req.body.userId,
              orderItems: orderItems,
              isPaid: req.body.isPaid,
              toAddress: {
                city: req.body.city,
                street: req.body.street,
                pincode: req.body.pincode,
                landMark: req.body.landMark,
              },
              paymentMethod: req.body.paymentMethod,
              price: req.body.price,
              isDelivered: req.body.isDelivered,
            };
  
            const order = new Order(data);
            await order.save();
  
            user.cartItems = []; // Empty the cartItems array
            await user.save();
  
            res.status(200).json(order);
          } else {
            res.status(403).json('Required fields are missing');
          }
        } else {
          res.status(404).json('User or product not found');
        }
      } catch (err) {
        res.status(500).json(err);
      }
    }
  };
  
  module.exports = createOrder;