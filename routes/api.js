
const express = require('express')
const router = express.Router()
const Food = require("../models/Food")


const fs = require('fs')
const path = require('path')
const uploadMaxSize = 5 * 1024 * 1024
const uploadFolder = path.resolve(__dirname, '..', 'public', 'uploads')

// FILE UPLOAD (ENDPOINT)
// listen for a POST request with a file attachment.
router.post("/file", (req, res) => {
    // check if we recieved a file with the name "image"
    if (req.files.image) {
      // make sure the file isn't too big
      if (req.files.image.size < uploadMaxSize) {
        // get the file extension of the uploaded image
        const fileExt = path.extname(req.files.image.name)
        // generate a new filename based on the current time
        const fileName = new Date().getTime() + fileExt
        // define the destination for the upload
        const destination = path.join(uploadFolder, fileName)
        // move the uploaded file to its destination
        req.files.image.mv(destination, (err) => {
          // if successful send the fileName back to the frontend.
          if (!err) res.send({ fileName: fileName })
          // if we failed ot move the file, send an error
          else res.status(500).send({ error: "File Save Failed" })
        })
      }
      else {
        // if the file was too big, send an error
        res.status(400).send({ error: "File Too Large" })
      }
    }
    else {
      // if no file was received, send an error
      res.status(400).send({ error: "File Not Found" })
    }
  })

// CREATE
router.post('/foods', (req, res) => {
  // this endpoint looks for JSON data in the body of the request
  delete req.body._id // no need for an id when creting a new food
  console.log(req.body)
  new Food(req.body).save()
    .then(food => res.send(food))
    .catch(err => res.status(500).send(err))
})
// READ
router.get('/foods', (req, res) => {

  let filter = {}
  let sort = {}
  if (req.query.sort == "birthDate") {
    sort.birthDate = "ascending"
  }
  if (req.query.sort == "name") {
    sort.name = "descending"
  }
  Food.find(filter)
    .sort(sort)
    .then(foods => res.send(foods))
    .catch(err => res.status(500).send(err))
})

// get a single food
router.get('/foods/:id', (req, res) => {
  Food.findById(req.params.id)
    .then(food => res.send(food))
    .catch(err => res.status(500).send(err))
})

//UPDATE
router.put('/foods/:id', (req, res) => {
  // the ":id" part of the endpoint url is dynamic.
  // we can retrieve it using "req.params.id"
  let options = { new: true }
  Food.findByIdAndUpdate(req.params.id, req.body, options)
    .then(food => res.send(food))
    .catch(err => res.status(500).send(err))
})

//DELETE
router.delete('/foods/:id', (req, res) => {
  console.log(req.params.id)
  Food.findByIdAndRemove(req.params.id)
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err))
})

  
module.exports = router;
