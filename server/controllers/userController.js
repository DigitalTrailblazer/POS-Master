const createHttpError = require("http-errors")
const User = require("../models/userModel")


const register = async (req, res, next) => {
    
    try {

        const {name, email, phone, password, role} = req.body

        if(!name || !email || !phone || !password || !role){
            const error = createHttpError(400, "All fields are required")
            return next(error)
        }

        const isUserPresent = await User.findOne( {email} )
        if(isUserPresent){
            const error = createHttpError(400, "User already exist")
            return next(error)
        }

        // user is not present, create user object and save into database
        const user = {
            name,
            phone,
            email,
            password,
            role
        }
        const newUser = new User(user)
        await newUser.save()

        res.status(201).json({
            success : true,
            message : "New user created successfully",
            data : newUser
        })

    } 
        catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    
}



module.exports = {register, login}