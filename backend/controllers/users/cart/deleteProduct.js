const User = require('../../../models/User')
const Product = require('../../../models/Product')

const deleteProductFromCart = async(req, res)=>{
    if(!req.params.id|| req.params.id === null){
        res.status(201).json("something went wrong")
    }else{
        try{
            const user =await User.findById(req.body.userId)
            const product = await Product.findById(req.params.id)
            
                const itemIndex = user.cartItems.findIndex(
                    (cartItem) => cartItem.proId.toString() === product._id.toString()
                  );
                  if (itemIndex !== -1) {
                    user.cartItems.splice(itemIndex, 1);
                    await user.save();
                    res.status(200).json(user);
                  }else{
                res.status(403).json('not found') 
            }
           
            
        }catch(err){
           res.status(500).json('Internal error')
        }
    }
}

module.exports = deleteProductFromCart