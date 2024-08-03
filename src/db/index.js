import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
// import dotenv from "dotenv";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\nConnected to MongoDB ! DB Host: ${connectionInstance.connection.host}`);  // this will print in terminal that server is running on port 8000 or 8001
    } catch (error) {
        console.log('MongoDB Connection error', error);    //dumping error and terminating the process
        process.exit(1);  //1 -> symbolises MongoDB Connection Error.
        
    }
}

export default connectDB;