require('dotenv').config();
const mongoString = process.env.DATABASE_URL;

const cors = require('cors');

const mongoose = require('mongoose');
const express = require('express');

mongoose.connect(mongoString).catch((error => handleError(error)));
const handleError = (error)=>{
    console.log("MongoDB connection failed.")
    console.log(error.message)
    if (mongoString){
      console.log("MONGODB="+mongoString) 
    }    
    else{
      console.log("MONGODB environment variable not found.") 
    }
  }

  console.log("aaaaaaaaaaaaaaa");

const app = express();
app.use(express.json());
app.listen(8080, () => {
    console.log("Server is running on localhost8080")
})


const fileUpload = require('express-fileupload') 
app.use(fileUpload())


app.use(cors())

app.use(express.static( 'public'))
app.use(express.json()) 
const api = require('./routes/api')
app.use('/api', api)