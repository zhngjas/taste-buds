const mongoose = require('mongoose')


const schema = new mongoose.Schema({
  isbn: { type: 'String' },
  title: { type: 'String' },
  author: { type: 'String' },
  // author: [Object],
  description: { type: 'String' },
  // quotes: {
  //   "type": "array",
  //   "items":
  //   {
  //     quotation: { type: 'String' },
  //     page: { type: 'Number' }
  //   }
  // },
  quotation: { type: 'String' },
  page: { type: 'Number' },
  fileName: { type: 'String' },
  completedDate: { type: 'Date' },
  completed: { type: 'Boolean' }
})

module.exports = mongoose.model('Food', schema);