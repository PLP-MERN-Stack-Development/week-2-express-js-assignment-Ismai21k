
//Create a custom logger middleware that logs the request method, URL, and timestamp

module.exports = function(req, res, next) {
    const timestamp = new Date().toISOString()
    console.log(`${timestamp} ${req.method} ${req.originalUrl}`)
    next()
}