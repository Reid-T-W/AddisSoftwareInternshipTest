require('dotenv').config()
const express = require('express')
const routes = require('./routes/index')
const exp = require('constants')
const mongoose = require('mongoose')

// express app
const app = express()

// middleware
app.use(express.json())

// middleware to log requests
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/v1', routes)

// connect to mongoose
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    // listen for requests
    app.listen(process.env.PORT, ()=>{
        console.log(`Connected to Database and listening on port ${process.env.PORT}`)
})
})
.catch((error)=>{
    console.log(error)
})

