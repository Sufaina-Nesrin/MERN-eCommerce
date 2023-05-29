const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

   
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        default:""
    },
    category:{
      type:String,
      required:true
    },
    desc:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        required:true
    },
    review:{
        type:Array,
        default:[]
    }

},{timestamps:true})

module.exports = mongoose.model("Product",ProductSchema)