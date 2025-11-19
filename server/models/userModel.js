const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        
        validate : {
            validator : function(mail){
                return /\S+@\S+\.\S+/.test(mail)
            },
            message : "Invalid email address"
        }
    },

    phone : {
        type : Number,
        required : true,
        unique : true,

        validate : {
            validator : function (mob){
                return  /^\d{10}$/.test(mob)
            },
            message : "Phone must be 10 digits"
        }
    },

    password : {
        type : String,
        required : true
    }, 

    role : {
        type : String,
        required : true
    }
}, {
    timestamps : true
})

module.exports = mongoose.model("User", userSchema)