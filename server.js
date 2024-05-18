const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const cors = require('cors')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', ()=>{
    console.log('Mongoose is connected');
})

app.use(cors())
app.use(express.json())

const foodRouter = require('./controllers/foods.js')
app.use('/foods', foodRouter);

app.listen(3000, ()=>{
    console.log('Server is running on port 3000')
})