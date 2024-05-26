import mongoose, { Schema } from 'mongoose'

const posttagSchema = mongoose.Schema({
  postID: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
  tagID: {
    type: Schema.Types.ObjectId,
    ref: 'Tag',
    required: true,
  },
})

export const Posttag = mongoose.model('Posttag', posttagSchema)
