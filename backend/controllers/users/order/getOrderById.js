const Order = require('../../../models/Order')
const Product = require('../../../models/Product')

const getOrderById = async(req, res)=>{
    if(req.params.id||req.params.id !==null){
        
        const item = await Order.findById(req.params.id)
        if(item){
            return res.status(200).json(item)
        }else{
            res.status(404).json('not found')
        }
    }
    res.status(500).json('something went wrong')
}
module.exports = getOrderById