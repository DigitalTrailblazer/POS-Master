const express = require("express")
const { register, login, getUserData } = require("../controllers/userController")
const { isVerified } = require("../middlewares/tokenVerfication")
const router = express.Router()




// AUTH ROUTES
router.post("/register", register)
router.post("/login", login)

router.get("/", isVerified, getUserData)


module.exports = router