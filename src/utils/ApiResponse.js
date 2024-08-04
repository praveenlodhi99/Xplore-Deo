// This class is created to standardize the ApiResponse sent to the user.

// ErrorResponse & ApiResponse were always in class format
//  1. Create Class
//  2. Create Constructor -
//      - properties: statusCode, data, message, success
//      - if no message is provided, set it to "Success"
//      - success is determined by statusCode being less than 400

class ApiResponse {
    constructor(statusCode, data, message = 'Success') {
        this.statusCode = statusCode; // HTTP status code of the response
        this.data = data; // Data to be sent in the response
        this.message = message; // Message to be sent in the response
        this.success = statusCode < 400; // Determines if the request was successful

        // HTTP response/status code categories:
        //      - Informational responses (100-199)
        //      - Successful responses (200-299)
        //      - Redirection messages (300-399)
        //      - Client error responses (400-499)
        //      - Server error responses (500-599)
    }
}

export { ApiResponse }