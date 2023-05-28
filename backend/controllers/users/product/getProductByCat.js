const Product = require('../../../models/Product');

const getProductbyCat = async(req, res)=>{
    if(req.params.id||req.params.id !==null){
        try{
            const product =await Product.find({category:req.params.category})
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

module.exports = getProductbyCat