const User = require('../../../models/User')

const getUserById = async(req, res)=>{
    if(req.params.id || req.params.id !==null){
        try{
            const user = await User.findById(req.params.id)
                if(user){
                    res.status(200).json(user)
                }else{
                   res.status(404).json('Not found')
                }
            }
       
        catch(err){
           res.status(500).json('something went wrong') 
        }
    }
}

module.exports = getUserById