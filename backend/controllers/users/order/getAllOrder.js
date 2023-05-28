const Order = require('../../../models/Order')


const getAllOrders = async(req, res)=>{
    if(!req.body.userId){
       return res.status(404).json("user not found")
    }else{
        
        const allOrders = await Order.find({userId:req.body.userId})
        if(allOrders){
           return res.status(200).json(allOrders)
        }else{
            res.status(403).json('not found')
        }
        
    }
    return res.status(500).json('internal error')
}

module.exports = getAllOrders