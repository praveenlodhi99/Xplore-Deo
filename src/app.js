import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Set up CORS middleware to allow requests from the specified origin
app.use(
    cors({
        origin: "process.env.CORS_ORIGIN", // Allow requests from the origin specified in the environment variable CORS_ORIGIN
        credentials: true, // Enable credentials (cookies, authorization headers, etc.)
    })
);

// Common middlewares
app.use(express.json({ limit: "16kb" }));   // Middleware to parse incoming JSON requests with a limit of 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" }));   //Middleware to parse URL-encoded data with a limit of 16kb
app.use(express.static("public"));   // Serve static files from the 'public' directory
app.use(cookieParser()); //with the help of express user can read the cookies; also always put in middleware after creating app.

// Import routes
import healthcheakRouter from "./routes/healthcheak.routes.js"

// Register routes
app.use("/api/v1/healthcheak", healthcheakRouter)

//export the app
export { app };
