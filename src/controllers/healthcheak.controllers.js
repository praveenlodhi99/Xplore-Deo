import { ApiResponse } from "../utils/ApiResponse.js"; // Importing ApiResponse utility for standardized API responses
import { asyncHandler } from "../utils/asyncHandler.js"; // Importing asyncHandler to handle asynchronous functions

// This function handles the health check endpoint. 
// Instead of writing try-catch blocks for error handling, we use the asyncHandler utility.

const healthcheck = asyncHandler(async (req, res) => {

    // Respond with a 200 status and a JSON object indicating the health check passed
    return res
        .status(200)
        .json(new ApiResponse(200, "OK", "Health Check Passed"));
});

export { healthcheck };
// Exporting the healthcheck function so it can be used in other files.
// Exporting this function allows it to handle health check requests in different parts of the application.
// This practice helps in organizing the code by keeping route handlers in separate files.
