const createHttpError = require("http-errors")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

const isVerified = async (req, res, next) => {

    try {
        
        // FETCH ACCESS TOKEN FROM req COOKIES
        const {accessToken} = req.cookies
        if(!accessToken){
            const error = createHttpError(401, "Please Provide Token")
            return next(error)
        }

        // VERIFY THE TOKEN
        let decodedToken;   // decoded token gives you the payload you sent during login/register
        try {
            decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET_KEY);
        } 
        catch (err) {
            return next(createHttpError(401, "Invalid or expired token"));
        }    
        
        // FETCH USER
        const user = await User.findById(decodedToken._id)
        if(!user){
            const error = createHttpError(401, "User does not exist")
            return next(error)
        }

        // ATTATCH USER DATE TO THE REQUEST & FORWARD REQ TO REQ HANDLER
        req.user = user
        next()

    } 
    catch (error) {
        const err = createHttpError(500, "Something went wrong with authentication")
        return next(err)
    }
    
}

module.exports = {isVerified}