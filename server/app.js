require("dotenv").config()
const express = require("express")

const connectDB = require("./config/database.js");
const globalErrorHandler = require("./middlewares/globalErrorHandler.js");
const createHttpError = require("http-errors");

const app = express()
connectDB()


// ROUTES
app.get("/", (req, res) => {
    const err = createHttpError(404, "something went wornggg")
    throw err

    res.json({
        message : "on / route"
    })
})










// GLOBAL ERROR HANDLER
app.use(globalErrorHandler)


// APP_SERVER
const PORT = process.env.PORT 
app.listen(PORT, ()=>{
    console.log(`pos_server is running at ${PORT} port`)
})