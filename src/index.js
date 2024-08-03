// whenever importing write fulname of file like ----> ./app.js ----> otherwise Error

import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
})  

const PORT = process.env.PORT || 8001;       //8001 is the default port for production if it doesn't pick up enviromental variables .env (8000)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);  // this will print in terminal that server is running on port 8000 or 8001
})