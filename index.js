require('dotenv').config()
const cors = require('cors')

const mongoose = require('mongoose')
const express = require('express')
// Initialize Express
const app = express();
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});app.listen(8080, function () {
    console.log("Server is running on localhost8080");
});


const fileUpload = require('express-fileupload') 
app.use(fileUpload())


app.use(cors())

app.use(express.static( 'public'))
app.use(express.json()) 
const api = require('./routes/api')
app.use('/api', api)


mongoose.connect(process.env.MONGODB).catch((error => handleError(error)));
const handleError = (error)=>{
    console.log("MongoDB connection failed.")
    console.log(error.message)
    if (process.env.MONGODB){
      console.log("MONGODB="+process.env.MONGODB) 
    }    
    else{
      console.log("MONGODB environment variable not found.") 
    }
  }

  console.log("aaaaaaaaaaaaaaa");