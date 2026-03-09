const express = require('express')
const connectDB = require('./config')
const loggerMiddleware = require("./middlewares/loggerMiddleware")
const categoryRoute = require('./routes/categoryRoutes')
const productRoute = require('./routes/productRoutes')

const app = express()
const PORT = process.env.PORT || 5000


app.use(loggerMiddleware)
app.use(express.json())



app.use('/api/categories', categoryRoute)
app.use('/api/products', productRoute)

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} link: http://localhost:${PORT}`)
    })
})