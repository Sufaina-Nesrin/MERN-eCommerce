const Product = require('../../../models/Product')

const editProduct = async(req, res)=>{
    if(req.params.id||req.params.id!== null){
       try{
         const productExists = await Product.findById(req.params.id)
         if(productExists){
           const updatedProduct = await Product.findByIdAndUpdate(req.params.id,{
             $set:req.body
            },{new:true})
            res.status(200).json(updatedProduct)
         }else{
            res.status(403).json('product not found')
         }
         
       }catch(err){
        res.status(500).json("Something went wrong")
       }
    }else{
        res.status(201).json('')
    }
}

module.exports = editProduct