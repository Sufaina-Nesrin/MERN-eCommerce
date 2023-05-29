const User = require('../../../models/User');
const Order = require('../../../models/Order')

const updateOrder = async(req, res)=>{
   
        try{
         const updatedOrder =await Order.findByIdAndUpdate(req.params.id,
            {
               isDelivered:req.body.isDelivered,
               deliveryStatus:req.body.deliveryStatus
            }, { new: true })
          res.status(200).json(updatedOrder)
        }catch(err){
    
        }
    
    
}
module.exports = updateOrder