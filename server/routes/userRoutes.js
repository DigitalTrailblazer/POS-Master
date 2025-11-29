const express = require("express")
const { register, login, getUserData, logout } = require("../controllers/userController")
const { isVerified } = require("../middlewares/tokenVerfication")
const router = express.Router()




// AUTH ROUTES
router.post("/register", register)
router.post("/login", login)
router.post("/logout", isVerified, logout)

router.get("/", isVerified, getUserData)


module.exports = router