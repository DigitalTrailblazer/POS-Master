const mongoose = require("mongoose")

const connectDB = async () => {
    
    try {
        const connect = await mongoose.connect(process.env.MONGODB_CONNECTION_URI, {

            autoIndex : false,
            serverSelectionTimeoutMS : 5000 // 5ms
        })
        console.log(`MongoDB connected : ${connect.connection.host}`)
    } 
        catch (error) {
        console.log(`DB_ERROR: ${error.message}`)
        console.error(`Database connection error: ${error.message}`);
        process.exit(1)
    }

    mongoose.connection.on("disconnected", () => {
        console.log("MongoDB disconnected")
    })
}

module.exports = connectDB