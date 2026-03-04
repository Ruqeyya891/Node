const exxpress =require('express')
const { nanoid} = require('nanoid')
const app = express()
const port = 8080

app.use(express.json())
const tours=require('./data')
const { log } = require('console')

//http reques methods:GET ,POST , PUT,DELETE
app.get ('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/',(req,res)=>{
    res.send(`<h1>Hello World<h1>`)
})

app.get('/message',(req,res)=>{
    res.json({
    message :'Hello World!',
    status:'success',
    error:null
    })
})

 //middleware: function that has access to the request and response objects, and the next function in the application’s request-response cycle. It can execute any code, make changes to the request and response objects, end the request-response cycle, or call the next middleware function in the stack.
// global variables: __dirname, __filename, process, require, module, exports

//console.log("__dirname:",__dirname)
//console.log("__filename:",__filename)

 //app.get('/home', (req, res) => {
  // res.sendFile(`${__dirname}/views/home.html`)
//  })

//  app.get('/about', (req, res) => {
//    res.sendFile(`${__dirname}/views/about.html`)
//  })

//  app.use((req, res) => {
//    res.sendFile(`${__dirname}/views/error.html`)
//  })




