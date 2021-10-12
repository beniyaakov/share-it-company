const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    firstName: {
        required: true,
        type: String
    },
    lastName: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String,
    },
    role: {
        type: String,
        default: 'User'
    },
    favorites: {
        type: [

        ]
    },
    posts: {
        type: [
            {
                userName: {
                    type: String,
                },
                content: {
                    type: String,
                },
                comments: {
                    type: [
                        {
                            userName: {
                                type: String,
                            },
                            comment: {
                                type: String,
                            },
                        }
                    ]
                },
                likes:{
                    type:Number,
                    default:0
                },
                Date: {
                    type: Date,
                    default: Date.now()
                }

            }
        ]
    }


})

const userModel = mongoose.model('Users', userSchema)
module.exports = userModel