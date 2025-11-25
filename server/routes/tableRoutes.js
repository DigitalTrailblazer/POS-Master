const express = require("express")
const router = express.Router()

const { addTable, getAllTables, updateTable } = require("../controllers/tableControllers")
const { isVerified } = require("../middlewares/tokenVerfication")

 
router.post("/", isVerified, addTable)

router.get("/", isVerified, getAllTables)

router.put("/:id", isVerified, updateTable)

// isVerified, means the user is verified by accesstoken

module.exports = router 