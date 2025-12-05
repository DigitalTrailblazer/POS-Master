const express = require("express")
const router = express.Router()

const { createOrder, verifyPayment } = require("../controllers/paymentController")
const { isVerified } = require("../middlewares/tokenVerfication")



router.post("/create-order", isVerified, createOrder)
router.post("/verify-payment", isVerified, verifyPayment)



module.exports = router