const Product = require('../../../models/Product')

const addProduct = async(req, res)=>{
    try{
        if(!req.body||
            !req.body.name||
            !req.body.img||
            !req.body.category||
            !req.body.price||
            !req.body.desc){
          return res.status(403).json({success:false,message:"Required fields are missing"})    
            }
            const productExists =await Product.findOne({
                $and:[{name:req.body.name}, {category:req.body.category},{price:req.body.price}]
            })
            if(productExists){
                res.status(403).json({
                    success:false,
                    message:"Product already Exists"
                })
            }else{
            
                const data = {
                    name:req.body.name,
                    desc:req.body.desc,
                    category:req.body.category,
                    price:req.body.price,
                    img:req.body.img ,
                    review:req.body.review
                }
                const product = new Product(data);
                await product.save();
                 res.status(200).json(product)
            }
    }catch(err){
        res.status(500).json("Something went Wrong!")
     
    } 
}

module.exports = addProduct
