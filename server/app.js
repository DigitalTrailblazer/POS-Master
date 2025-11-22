require("dotenv").config()
const express = require("express")

const connectDB = require("./config/database.js");
const globalErrorHandler = require("./middlewares/globalErrorHandler.js");
const createHttpError = require("http-errors");
const userRoutes = require("./routes/userRoutes.js");
const orderRoutes = require("./routes/orderRoutes.js");
const cookieParser = require("cookie-parser");

const app = express()
connectDB()

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())



// ROUTES
app.get("/", (req, res) => {
    const err = createHttpError(404, "something went wornggg")
    throw err

    res.json({
        message : "on / route"
    })
})


// Auth Endpoints
app.use("/api/user", userRoutes)
app.use("/api/order", orderRoutes)






// GLOBAL ERROR HANDLER
app.use(globalErrorHandler)


// APP_SERVER
const PORT = process.env.PORT 
app.listen(PORT, ()=>{
    console.log(`pos_server is running at ${PORT} port`)
})