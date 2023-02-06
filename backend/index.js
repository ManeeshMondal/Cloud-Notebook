const connectToMongoose=require ('./db');
var cors = require('cors')
const express = require('express')
const app = express()
const port = 5000
connectToMongoose();

 

app.use(cors())
// middleware (this is used because of accessing the req.body)
app.use(express.json());

// available routes 
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes')) 


app.listen(port, () => {
  console.log(`CloudeNotebook is listening on port ${port}`)
})
