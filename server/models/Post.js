const { Schema, model } = require('mongoose')
const commentSchema = require('./Comment')
const tagSchema = require('./Tag')

const postSchema = new Schema({
  content: {
    type: String,
    required: true,
    maxlength: 1000,
    minlength: 1
  },
  username: {
    type: String,
    required: true,
    maxlength: 50
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  comments: [commentSchema],
  tags: [tagSchema]
})

const Post = model('Post', postSchema)

module.exports = Post