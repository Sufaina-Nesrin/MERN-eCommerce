const User = require('../../../models/User');

const updateUser = async(req, res)=>{
    if(req.body._id===req.params.id){
        try{
         const updatedUser =await User.findByIdAndUpdate(req.params.id,
            {
               username:req.body.username,
               isAdmin:req.body.isAdmin
            }, { new: true })
          res.status(200).json(updatedUser)
        }catch(err){
    
        }
    }else{
        res.status(400).json("you can only update your account")
    }
    
}
module.exports = updateUser