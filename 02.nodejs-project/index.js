const express = require('express')
const { nanoid } = require('nanoid')
const app = express()
const port = 8080



app.use(express.json())

const tours = require('./data')

app.get('/api/tours', (req, res) => {
    try {
        console.log('query', req.query)
        const{search = '',sort , order ='asc'}=req.query

        let filteredTours = tours.filter((tours) => tours.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
            || tours.destination.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

        if (sort) {
            filteredTours = filteredTours.sort((a, b) => {
                if (typeof a[sort] === 'string') {
                    return order === 'asc' ? a[sort].toLocaleLowerCase().localeCompare(b[sort].toLocaleLowerCase()) : b[sort].toLocaleLowerCase().localeCompare(a[sort].toLocaleLowerCase())
                } else {
                    return order === 'asc' ? a[sort] - b[sort] : b[sort] - a[sort]
                }
            })
        }

        res.status(200).json({
            data: filteredTours,
            message: 'Tours retrieved successfully',
            success: true,
            error: null

        })

    } catch (error) {
        res.status(500).json({
            message: 'Interval server error',
            status: 'error',
            error: error.message
        })
    }
})

app.get('/api/tours/:id', (req, res) => {
    // console.log('req params ', req.params);
    try {
        const { id } = req.params
        const tour = tours.find((tour) => tour.id === id)

        if (!book) {
            return res.status(404).json({
                data: null,
                message: 'tour not found',
            })
        }

        res.status(200).json({
            data: tour,
            message: 'tour retrieved successfully',
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            status: 'error',
            error: error.message
        })
    }

})
app.delete('/api/tours/:id', (req, res) => {
    try {
        const { id } = req.params

        const idx = tours.findIndex((tour) => tour.id === id)

        if (idx === -1) {
            return res.status(404).json({
                message: 'Tour not found'
            })
        }

        const deleteTours = tours.splice(idx, 1)

        res.status(200).json({
            message: 'Tour deleted successfully',
            deletedTour: deletedTour[0],
            updatedTours: tours
        })
    } catch (error) {
        res.status(500).json({
            message: 'Interval Server Error',
            status: 'error',
            error: error.message
        })
    }
})

app.post('/api/tours', (req, res) => {
    try {
        const { title, author, price, description, stock, genre, language, coverImageURL } = req.body

        if (!title || !author || !description || !stock || !genre || !language || !coverImageURL) {
            return res.status(400).json({
                message: 'All fields are required',
            })
        }
        const newTour = {
            id: nanoid(8),
            ...req.body
        }
        const updatedTours = [...tours, newTour]

        res.status(201).json({
            message: 'Book created successfully',
            tour: newTour,
            updatedTours: updatedTours
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            status: 'error',
            error: error.message
        })
    }
})

app.put('/api/tours/:id', (req, res) => {
    try {
        const { id } = req.params
        const { title, author, price, description, stock, genre, language, coverImageURL } = req.body
        const idx = tours.findIndex((tour) => tour.id === id)

        if (!title || !author || !price || !description || !stock || !genre || !language || !coverImageURL) {
            return res.status(400).json({
                message: 'All fields are required',
            })
        }
        if (idx === -1) {
            return res.status(400).json({
                message: 'Tour not found',
            })
        }

        tours[idx] = {
            id,
            ...req.body
        }

        res.status(200).json({
            message: 'Tour updated successfully',
            tour: tours[idx],
            updatedTours: tours
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            status: 'error',
            error: error.message
        })
    }
})

app.patch('/api/tours/:id', (req, res) => {
    try {
        const { id } = req.params
        const { title, author, price, description, stock, genre, language, coverImageURL } = req.body
        const idx = tours.findIndex((tour) => tour.id === id)
        if (idx === -1) {
            return res.status(404).json({
                message: 'Tour not found',
            })
        }
        const updatedTours = {
            id,
            ...req.body
        }
        if (!title) {
            updatedTours.title = tours[idx].title
        }
        if (!title) {
            updatedTours.author = tours[idx].author
        }
        if (!title) {
            updatedTours.price = tours[idx].price
        }
        if (!title) {
            updatedTours.description = tours[idx].description
        }
        if (!title) {
            updatedTours.stock = tours[idx].stock
        }
        if (!title) {
            updatedTours.genre = tours[idx].genre
        }
        if (!title) {
            updatedTours.language = tours[idx].language
        }
        if (!title) {
            updatedTours.coverImageURL = tours[idx].coverImageURL
        }

        tours[idx] = updatedTour

        res.status(200).json({
            message: 'Tour updated successfully',
            tour: tours[idx],
            updatedTours: tours
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal Server Error',
            status: 'error',
            error: error.message
        })
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}, url: http://localhost:${port}`);
})

