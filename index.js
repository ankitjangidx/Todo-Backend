const express = require('express')
const app = express()

require('dotenv').config();
const PORT = process.env.PORT || 4000


// middleware to pass json request body
app.use(express.json());

// imports routes for Todo API 
const todoRoutes = require('./routes/todos')
app.use('/api/v1', todoRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// connect to database
const dbConnect = require('./config/database')
dbConnect();

// default route

app.get('/', (req, res) => { 
   res.send("hello")
})