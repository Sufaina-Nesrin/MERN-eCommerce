const User = require('../../../models/User')
const Product = require('../../../models/Product')

const updateQty = async(req, res)=>{
    if(!req.params.id){
        res.status(201).json("something went wrong")
    }else{
        try{
            const user =await User.findById(req.body.userId)
            const product = await Product.findById(req.params.id)
                if(product){
                    const itemIndex = user.cartItems.findIndex(
                        (cartItem) => cartItem.proId.toString() === product._id.toString()
                      );
                      if (itemIndex !==-1 ) {
                        user.cartItems[itemIndex].qty=req.body.qty;
                        await user.save();
                        res.status(200).json(user);
                      }else{
                    res.status(403).json('not found') 
                }
             
                }else{
                    res.status(404).json('not found')
                }
                
                
           
            
        }catch(err){
           res.status(500).json(err)
        }
    }
}

module.exports = updateQty