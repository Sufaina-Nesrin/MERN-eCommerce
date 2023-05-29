const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
      city:{
        type:String,
        default:""
      },
      street:{
        type:String,
        default:""
      },
      pincode:{
        type:Number,
        default:""
      },
      landmark:{
        type:String,
        default:""
      },
      contactPhone:{
        type:Number,
        default:""
      }
    },
    phone:{
        type:Number,
        required:true
    },
    profilePicture:{
        type:String,
        default:""
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    cartItems:{
      type:Array,
      default:[]
    },
    
},{timestamps: true,})

module.exports = mongoose.model('User', UserSchema)