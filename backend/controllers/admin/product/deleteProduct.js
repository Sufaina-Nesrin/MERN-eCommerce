const Product = require('../../../models/Product');

const deleteProduct = async (req, res)=>{
  
    try{
        const productExists = Product.findById(req.params.id)
        if(productExists){
            await Product.findByIdAndDelete(req.params.id)
            res.status(200).json("product has been deleted")
        }else{
            res.status(403).json("product not found")
        }
        
    }catch(err){
      res.status(500).json('something went wrong')
    }
  
}
module.exports = deleteProduct