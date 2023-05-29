const Order = require('../../../models/Order')


const getAllOrders= async(req, res)=>{
         try{
            const allOrders = await Order.find({userId:req.body.userId})
            if(allOrders){
               return res.status(200).json(allOrders)
            }else{
                res.status(403).json('not found')
            }
            
         }catch(err){
            return res.status(500).json('internal error')
         }  
       
    
   
}
module.exports = getAllOrders
