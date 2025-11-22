const express = require("express")
const { addOrder, getOrderByID, getAllOrders, updateOrder } = require("../controllers/orderController")
const { isVerified } = require("../middlewares/tokenVerfication")
const router = express.Router()


router.post("/",isVerified, addOrder)
router.get("/", isVerified, getAllOrders)

router.get("/:id", isVerified, getOrderByID)
router.put("/:id", isVerified, updateOrder)



module.exports = router