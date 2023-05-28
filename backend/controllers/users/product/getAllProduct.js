const Product = require('../../../models/Product');

const getAllProducts = async(req, res)=>{
try{
    const product = await Product.find()
    if(product){
       res.status(200).json(product)
    }else{
        res.status(403).json('no products found')
    }
}catch(err){
    res.status(500).json('something went wrong')
}
  
}
module.exports = getAllProducts
