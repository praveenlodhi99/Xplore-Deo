// We are creating a function called asyncHandler to handle errors in an asynchronous way,
// so we don't have to use try-catch blocks in our route handlers all the time.

const asyncHandler = (requestHandler) => {
    // The asyncHandler function takes a request handler function (requestHandler) as its argument.

    // It returns a new function that takes the usual Express parameters: req, res, and next.
    return (req, res, next) => {
        
        // The returned function wraps the request handler function (requestHandler) in a Promise.
        // If the requestHandler function returns a promise that gets rejected (i.e., an error occurs),
        // the catch method will catch the error and pass it to the next middleware (which is usually an error handler).
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    };
};

// Example usage:
// const someAsyncRouteHandler = asyncHandler(async (req, res, next) => {
//     // Your async route handling logic here
// });
