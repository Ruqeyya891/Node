const express = require("express")
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const app = express()
const port = 3000

app.use(express.json())
app.get('/', (req, res) => {
    res.send('Hello World!')
})

const DB_URL = "mongodb+srv://ptp101:ptp101@cluster0.qxnvmei.mongodb.net/doctorapp"

const DoctorSchema = new Schema({
    name: String,
    surname: String,
    email: String,
    age: Number,
    position: String,
}, { timestamps: true })

const DoctorModel = mongoose.model('Doctor', DoctorSchema)


app.get('/api/doctor', async (req, res) => {
    try {
        const doctors = await DoctorModel.find()
        res.status(200).json({
            message: "Success",
            data: doctors
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
})

//post created

app.post('/api/doctor', async (req, res) => {
    try {
        const { name, surname, email, age, position } = req.body
        if (!name || !surname || !email || !age || !position) {
            return res.status(400).json({
                message: 'All fields are required',
                success: false
            })
        }
        const doctors = new DoctorModel({
            ...req.body
        })
        await doctors.save()
        res.status(201).json({
            message: 'Created successfully',
            data: doctors
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}, link: http://localhost:3000`)
})
mongoose.connect(DB_URL)
 .then(()=> console.log('MongoDb_qosulub'))
 .catch((err)=> console.log(err));