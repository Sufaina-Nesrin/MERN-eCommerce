const Order = require('../../../models/Order')

const deleteOrder= async(req, res)=>{

    if(req.params.id || req.params.id !==null){
        try{
            const order = await Order.findById(req.params.id)
            if(order){
              await Order.findByIdAndDelete(req.params.id)
             return res.status(200).json('order has been deleted')
            }else{
              return res.status(404).json('not found')
            }
        }catch(err){
          return  res.status(404).json('not found')
        }
      
    }
    return res.status(500).json('something went wrong')
}

module.exports = deleteOrder