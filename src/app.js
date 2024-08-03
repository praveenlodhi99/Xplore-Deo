import express from "express";
import cors from "cors";

const app = express();

// Set up CORS middleware to allow requests from the specified origin
app.use(
    cors({
        origin: "process.env.CORS_ORIGIN", // Allow requests from the origin specified in the environment variable CORS_ORIGIN
        credentials: true, // Enable credentials (cookies, authorization headers, etc.)
    })
);

// Middleware to parse incoming JSON requests with a limit of 16kb
app.use(express.json({ limit: "16kb" }));

// Middleware to parse URL-encoded data with a limit of 16kb
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// Serve static files from the 'public' directory
app.use(express.static("public"));

export { app };
