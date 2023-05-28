const User = require ('../../../models/User')
const bcrypt = require('bcrypt');

//REGISTER
module.exports = async(req, res)=>{
    try{
        if(!req.body||
            !req.body.username||
            !req.body.email||
            !req.body.phone||
            !req.body.password){
       res.status(403).json({success:false,message:"Required fields are missing"})    
            }
            const userExists =await User.findOne({
                $or:[{email:req.body.email}, {phone:req.body.phone}]
            })
            if(userExists){
                res.status(403).json({
                    success:false,
                    message:"User aleready exists"
                })
            }else{
            const salt =await bcrypt.genSalt(10) 
            const hashedPassword =await bcrypt.hash(req.body.password, salt)
                const data = {
                    email:req.body.email,
                    username:req.body.username,
                    phone:req.body.phone,
                    password:hashedPassword  
                }
                const user = new User(data);
                await user.save();
                 res.status(200).json(user)
            }
    }catch(err){
        res.status(500).json("Username should be unique")
     
    }
}




