const express = require("express")

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const DB_URL = "mongodb+srv://ptp101:ptp101@cluster0.qxnvmei.mongodb.net/movieapp"

const BookSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    author: String,
    stock: Number
})

// MODEL
const MovieModel = mongoose.model("Movie", BookSchema)

mongoose.connect(DB_URL)
    .then(() => console.log('Connected!'))
    .catch((err) => console.log(err))



// validator midlware
const moviesValidator = (req, res, next) =>{
    const {title , description , price,author,stock } =req.body
    if(!title || !description || !price || !author || !stock){
        return res.status(400).json({
            message:'All fields are required',
            success: false
    })    
  }
  next()
}

// get all data
app.get('/api/movies', async (req, res) => {
    try {

        const movies = await MovieModel.find()

        res.status(200).json({
            message: 'Success',
            data: movies
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
})


// create new movie
app.post('/api/movies', moviesValidator, async (req, res) => {
    try {

        const { title, description, price, author, stock } = req.body

       
        

        const movies = new MovieModel({
            ...req.body
        })

        await movies.save()

        res.status(201).json({
            message: 'Movie created successfully',
            data: movies
        })

    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
})


// update movie
app.put('/api/movies/:id', moviesValidator, async (req, res) => {
    try {

        const { id } = req.params
      
        

        const updatedMovies = await MovieModel.findByIdAndUpdate(
            id,
            { ...req.body },
            { new: true }
        )

        if (!updatedMovies) {
            return res.status(404).json({
                message: 'Movie not found',
                success: false
            })
        }

        res.status(200).json({
            message: 'Movie updated successfully',
            data: updatedMovies
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