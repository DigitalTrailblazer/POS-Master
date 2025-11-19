const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

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




userSchema.pre("save", async function (next) {
    // before saving this user, check if password changed
    if(!this.isModified('password')){
        next()
    }

    // mongoose MW to hash password
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})





module.exports = mongoose.model("User", userSchema)