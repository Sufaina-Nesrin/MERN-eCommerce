const User = require('../../../models/User')

const getAllUsers = async(req, res)=>{
    try{
        const users = await User.find()
        if(users.length !==0){
            res.status(200).json(users)
        }else{
            res.status(404).json('Not found')
        }
    }catch(err){
        res.status(500).json(err)
    }
}

module.exports = getAllUsers