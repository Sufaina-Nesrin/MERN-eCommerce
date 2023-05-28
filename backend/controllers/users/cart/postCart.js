const User = require('../../../models/User')
const Product = require('../../../models/Product')

const addToCart = async(req, res)=>{
    if(req.params.id || req.params.id !==null){
        try{
            const user = await User.findById(req.body.id)
            const product = await Product.findById(req.params.id)
            if(user && product){
                
               
                    const data= {
                        proId:product._id,
                        qty:1
                    }
                    const isItemExist =user.cartItems.find(
                        (cartItems) => cartItems.proId.toString() ===product._id.toString()
                      );if(!isItemExist){
                    user.cartItems.push(data)
                        await user.save();
                        res.status(200).json(user)
                      }else{
                        res.status(403).json('product has already in the cart')
                      }
                    
                }else{
                    res.status(403).json('either user or product is missing')
                }

        }catch(err){
            res.status(500).json('something went wrong')
        }
    }
    
}

module.exports = addToCart