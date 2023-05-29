const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config

module.exports = (req, res, next)=>{
  const authHeader = req.headers.authorization;
  if(authHeader&&authHeader.startsWith('Bearer')){
    const token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.JWT_SECERET, (err, user) => {
      if (err) {
        return res.status(401).json("Token is not valid");
      }
      req.user = user;
      next();
    });
  }else{
    res.status(404).json("User is not Authenticated")
  }
}


