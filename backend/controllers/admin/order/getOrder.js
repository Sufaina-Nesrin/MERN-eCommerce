const Order = require('../../../models/Order')


const getOrderById= async(req, res)=>{
    if(req.params.id||req.params.id !==null){
        try{
            const item = await Order.findById(req.params.id)
            if(item){
                return res.status(200).json(item)
            }else{
                res.status(404).json('not found')
            }
        }catch(err){
            res.status(500).json('internal error')
        }
       
    }
    res.status(500).json('something went wrong')
}

module.exports = getOrderById
