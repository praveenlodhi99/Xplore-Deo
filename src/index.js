// whenever importing write fulname of file like ----> ./app.js ----> otherwise Error

import { app } from "./app.js";
import dotenv from "dotenv";                      
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 8001;       //8001 is the default port for production if it doesn't pick up enviromental variables .env (8000)


//writed in such a way that firstly db get connected then app get connected
connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);  // this will print in terminal that server is running on port 8000 or 8001
        })
    })
    .catch((err) => {
        console.log('MongoDB Connection Error', err);
    })



















// // to connect app only after database get connected