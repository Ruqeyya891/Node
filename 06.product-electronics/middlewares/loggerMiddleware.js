const loggerMiddleware = (req, res, next) => {

    console.log(`[LOG] ${req.method} ${req.originalUrl}`)

    next()
}

module.exports = loggerMiddleware