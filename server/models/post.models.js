import mongoose, { Schema } from 'mongoose'

const postSchema = mongoose.Schema(
  {
    authorID: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
    },
    status: {
      type: String,
      enum: ['draft', 'published', 'archived', 'scheduled'],
    },
    publishedAt: {
      type: String,
    },
    categoryID: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    imageURL: [
      {
        type: String,
      },
    ],
  },
  {
    timestamps: true,
  }
)

export const Post = mongoose.model('Post', postSchema)
