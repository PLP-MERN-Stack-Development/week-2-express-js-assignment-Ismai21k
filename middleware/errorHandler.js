const {AppError} = require('../errors/customErrors')

module.exports = function(err, req, res, next) {
    console.error(err.stack);

    if (err instanceof AppError) {
        return res.status(err.statusCode).json({ error: err.message });
    }

    // Fallback for unhandled errors
    res.status(500).json({ error: 'Something went wrong on the server.' });
}

