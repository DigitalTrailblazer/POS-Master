const Razorpay = require("razorpay")
const crypto = require("crypto")
const createHttpError = require("http-errors");
require("dotenv").config()



const createOrder = async (req, res, next) => {
    
    try {
        // SET UP RAZORPAY
        const razorpay = new Razorpay({

            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET
        })

        // EXTRACT AMOUNT FROM THE REQUEST BODY
        const {amount} = req.body

        const options = {
            amount: amount, 
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        }

        // REQUEST TO RAZORPAY TO CREATE AN ORDER, razorpay respond with an orderID
        const order = await razorpay.orders.create(options)

        // SEND A RESPONSE AFTER SUCCESSFULL CREATION OF order
        res.status(201).json({
            success: true,
            message: "Order created successfully",
            order: order
        })
    } 
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Order creation failed",
            error: error.message
        })
    }

}

const verifyPayment = async (req, res, next) => {
    try {
        
        // RECIEVE PAYMENT res THROUGH PAYMENT VERIFICATION API
        const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body
        console.log("BODY:", req.body)


        if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
            const error = createHttpError(400, "Incomplete payment details")
            return next(error)
        }

        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(razorpay_order_id + "|" + razorpay_payment_id)
            .digest("hex")
        console.log("SECRET:", process.env.RAZORPAY_KEY_SECRET)


        if (expectedSignature === razorpay_signature) {
            res.json({
                success: true, 
                message: "Payment verified successfully"
            })
        } 
        else {
            const error = createHttpError(400, "Payment verification failed")
            return next(error)
        }
    } 
    catch (error) {
        next(error)    
    }
}


module.exports = {createOrder, verifyPayment}