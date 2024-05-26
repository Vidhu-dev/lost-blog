import mongoose from 'mongoose'

const tagSchema = mongoose.Schema({
  tagName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

export const Tag = mongoose.model('Tag', tagSchema)
