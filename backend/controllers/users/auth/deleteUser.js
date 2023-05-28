const User = require('../../../models/User')

const deleteUser = async(req, res)=>{
    if(req.body.id===req.params.id){
        try{
            const user = await User.findById(req.params.id)
            if(!user||user===null){
                res.status(403).json("user not found")
            }else{
                await User.findByIdAndDelete(req.params.id)
                res.status(201).json('you have been deleted successfully')
            }


        }catch(err){
            res.status(403).json("you can delete only your account")
        }
    }
}
module.exports = deleteUser