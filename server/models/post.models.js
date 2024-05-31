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
      default: 'draft',
      required: true,
    },
    publishedAt: {
      type: Date,
    },
    categoryID: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    coverImage: {
      type: String,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

export const Post = mongoose.model('Post', postSchema)
