const User = require('../../../models/User')
const bcrypt = require('bcrypt');
const generateToken = require('../../../utils/generateToken')

module.exports = async(req, res)=>{
    try{
        if(!req.body||
           !req.body.email||
           !req.body.password
            ){
                res.status(403).json({
                    success:false,
                    message:"required fields are missing"
                })
            }else{
                
                const user =await User.findOne({email:req.body.email})
                if(user){
                    const validated = bcrypt.compare(req.body.password, user.password)
                    if(validated){
                        res.status(200).json({
                            _id: user._id,
                            name: user.username,
                            email: user.email,
                             isAdmin: user.isAdmin,
                             token: generateToken(user._id),
                        })
                    }else{
                        res.status(404).json("wrong credentials")
                    }
                }else{
                    res.status(404).json("user not found")
                }
            }
    }catch(err){
        res.status(500).json("something went wrong")
    }
}