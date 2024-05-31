import mongoose, { Schema } from 'mongoose'

const tagSchema = mongoose.Schema({
  tagName: {
    type: String,
    required: true,
  },
  postID: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
  },
})

export const Tag = mongoose.model('Tag', tagSchema)
