//This creates a new class AppError that inherits from the built-in Error class in JavaScript.
//It means AppError is still an error, but a more specific one.

//This is the constructor function. It runs when you create a new AppError, and it takes:
//message → the error message (e.g. "Invalid email")
//statusCode → the HTTP status (e.g. 400 or 404)


class AppError extends Error {
    constructor(message, statusCode){
        super(message);//This tells JavaScript to call the original Error class and pass it the message.

        this.statusCode = statusCode;// We're saving the statusCode so we can access it later in our error handling middleware.

        Error.captureStackTrace(this, this.constructor)//This line makes sure the error stack trace points to where the error happened, not inside this class file.
    }
}

class notFoundError extends AppError{
    constructor(message = 'Recourse Not Found'){
        super(message, 404) // Automatically sets status to 404
    }
};

class UnauthorizedError extends AppError{
    constructor(message = 'Unauthorize Access'){
        super(message, 401)
    }
}

module.exports = {
    AppError,
    notFoundError,
    UnauthorizedError
}