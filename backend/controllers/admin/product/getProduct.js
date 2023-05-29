const Product = require('../../../models/Product');

const getProduct = async(req, res)=>{
    if(req.params.id||req.params.id !==null){
        try{
            const product =await Product.findById(req.params.id)
            if(!product){
             res.status(403).json('product not found')
            }else{
             res.status(200).json(product)
            }
         }
         catch(err){
             res.status(500).json(err)
         }
    }else{
        res.status(201).json('req denied')
    }
    
}

module.exports = getProduct