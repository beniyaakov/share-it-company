const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName:{
        required:true,
        type:String
    },
    lastName:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        required:true,
        type:String,
    },
    role:{
        type:String,
        default:'User'
    },
    favorites:{
        type:[

        ]
    }
})

const userModel = mongoose.model('Users',userSchema)
module.exports = userModel