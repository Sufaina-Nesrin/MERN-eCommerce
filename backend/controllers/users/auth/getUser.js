const User = require('../../../models/User');

module.exports = async(req, res)=>{
    try{
        const user = await User.findById(req.params.id)
        if(user){
            res.status(200).json(user)
        }else{
            res.status(404).json("User not found")
        }
    }
    catch(err){
        res.status(500).json("something went wrong")
    }
}