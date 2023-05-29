const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({

    userId:{
        type:String,
        required:true
    },
    orderItems:{
        type:Array,
        required:true
    },
    paymentMethod:{
        type:String,
        required:true
    },
    isPaid:{
        type:Boolean,
        required:true
    },
    toAddress:{
        city:{
            type:String,
            required:true
        },
        street:{
            type:String,
            required:true
        },
        pincode:{
            type:Number,
            required:true
        },
        landMark:{
            type:String,
            required:true
        }
     
    },
    price:{
        type:Number,
        required:true,
        default:0
    },
    isDelivered:{
        type:Boolean,
        required:true,
        default:false
    },
    deliveryStatus:{
        type:String,
        default:'ordered'
    }

    
    })

    module.exports = mongoose.model("Order", OrderSchema)