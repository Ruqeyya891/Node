const express = require('express')
const cors = require('cors')
const connectDB = require('./config')
const doctorRoute = require('./routes/doctorRoute')
const departmentRoute = require('./routes/departmentRoute')

const app = express()
const PORT = process.env.PORT || 8080

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use('/api/doctors', doctorRoute)
app.use('/api/departments', departmentRoute)

// Connect to DB and start server
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} link: http://localhost:${PORT}`)
    })
})