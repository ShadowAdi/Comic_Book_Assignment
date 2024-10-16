// errorMiddleware.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack for debugging

    const statusCode = err.statusCode || 500; // Default to 500 if not set
    const message = err.message || "An unexpected error occurred."; // Default message

    res.status(statusCode).json({
        status: "error",
        statusCode,
        message,
    });
};

module.exports = errorHandler;
