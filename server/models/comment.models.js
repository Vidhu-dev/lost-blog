import mongoose, { Schema } from 'mongoose'

const commentSchema = mongoose.Schema(
  {
    commentorID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    postID: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    parentCommentID: {
      type: Schema.Types.ObjectId,
      ref: 'Comment',
    },
  },
  {
    timestamps: true,
  }
)

export const Comment = mongoose.model('Comment', commentSchema)
