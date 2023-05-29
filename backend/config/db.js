const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config()


const connectDb = async()=>{
    try {
      const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log('database connected ')
      } catch (error) {
       console.log(error);
      }
}

module.exports = connectDb 
