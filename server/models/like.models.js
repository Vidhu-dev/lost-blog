import mongoose, { Schema } from 'mongoose'

const likeSchema = mongoose.Schema({
  U: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  postID: {
    type: Schema.Types.ObjectId,
    ref: 'Post',
    required: true,
  },
})

export const Like = mongoose.model('Like', likeSchema)
