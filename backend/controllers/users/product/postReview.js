const Product = require('../../../models/Product')
const User = require('../../../models/User')

const postReview = async(req, res)=>{
    if(req.params.id || req.params.id !==null){
        try{
            const user = await User.findById(req.body.id)
            const product = await Product.findById(req.params.id)
            if(user && product){
                const reviewContent = {
                    userId:user._id,
                    username:user.username,
                    text:req.body.text
                }
                const existingReview = product.review.find(
                    (review) => review.userId.toString() === user._id.toString()
                  );
                  if(!existingReview){
                    product.review.push(reviewContent)
                    await product.save();
                    res.status(200).json(product)
                  }else{
                    res.status(403).json('you have already posted the review')
                  }
                
            }else{
                res.status(403).json('either user or product is missing')
            }

        }catch(err){
            res.status(500).json('something went wrong')
        }
    }
    
}

module.exports = postReview