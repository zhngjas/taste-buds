const mongoose = require('mongoose')

const profileSchema = new mongoose.Schema({
    userName: {type: 'String', default:'Mr. Bears'},
    fileName: {type: 'String', default:'https://i.pinimg.com/736x/05/d9/fe/05d9fe666e2502c2b456e55791bd9a53.jpg'}
})

const commentSchema = new mongoose.Schema({
    author: {type: profileSchema},
    comment: {type: 'String'},
    likes: {type: 'Number'}
})


const schema = new mongoose.Schema({
  food1: { type: 'String' , default:'hot dog'},
  cuisine1: { type: 'String' },
  country1: { type: 'String' },
  food2: { type: 'String' },
  cuisine2: { type: 'String' },
  country2: { type: 'String' },
  title: { type: 'String' },
  description: { type: 'String' },
//   fileName: [{ type: 'String' }],
  fileName: { type: 'String' },
  tags: [{ type: 'String' }],
  comments: [{ type: commentSchema}],
  agrees: { type: 'Number' },
  author: [{ type: profileSchema }]
})

module.exports = mongoose.model('Food', schema);