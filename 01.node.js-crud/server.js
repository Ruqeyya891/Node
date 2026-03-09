const exxpress = require('express')
const { nanoid } = require('nanoid')
const app = express()
const port = 8080

app.use(express.json())
const tours = require('./data')
const { log } = require('console')

app.get('/api/tours', (req, res) => {
  try {
    res.status(200).json({
      data: books,
      message: 'Tours retrevied successfully',
      status: 'success',
      error: null
    })
  } catch (error) {
    res.status(500).json({
      message: 'Internal server error',
      status: 'error',
      error: error.message
    })
  }
})

app.get('/api/tours/:id',(req,res)=>{
  try{
    const{id}=req.params
    const tour=tours.find((tour)=>tour.id===id)

    if(!tour){
      return res.status(404).json({
        data:null,
        message:'Tour not found'
      })
    }
    res.status(200).json({
        data:tour,
        message:'Tour retreived successfully'
    })
    }catch(error){
      res.status(500).json({
        message:'Internal server error',
        status:'error',
        error:error.message
      })
    }
  })

  app.delete('/api/tours/:id',(req,res)=>{
    try{
      const {id}=req.params
      const idx=tours.findIndex((tour)=>tour.id===id)
      
      if (idx === -1){
        return res.status(404).json({
          message:'Tour not found'
        })
      }
      const deleteTour =tours.splice(idx,1)
      res.status(200).json({
        message:'Tour deleted successfully',
        deletedTour:deletedTour[0],

        updatedTours:tours
      })
    }catch (error){
      res.status(500).json({
        message:'Interval Server Error',
        status:error,
        error:error.message
      })
    }
  })
  

  app.post('/api/tours',(req,res)=>{
    try{
      
    }catch (error){
      res.status(500).json({
        message:'Interval Server Error',
        status:'error',
        error:error.message
      })
    }
  })