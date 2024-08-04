// Errors are common in Node.js applications, and to handle them efficiently,
// Node.js provides a built-in Error class. In this code, we extend this Error
// class to create a custom error handler called ApiError. By extending the 
// built-in class, we avoid writing the error handling logic from scratch and 
// benefit from the built-in functionalities.

// Extending the built-in Error class to create a custom ApiError class
class ApiError extends Error {
    constructor (
        statusCode,  // HTTP status code representing the error type
        message = "Something went wrong",  // Default error message
        errors = [],  // Additional error details
        stack = ""  // Custom stack trace, if any
    ) {
        // Call the parent class constructor with the message parameter
        super(message)
        
        // Assign properties to the custom error instance
        this.statusCode = statusCode  // HTTP status code
        this.data = null  // Placeholder for any additional data
        this.message = message  // Error message
        this.success = false  // Indicates the success status, always false for errors
        this.error = errors  // Additional error details

        // If a stack trace is provided, use it; otherwise, capture the current stack trace
        if(stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

// Export the custom ApiError class for use in other modules
export { ApiError }