import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { Tag } from '../models/tag.models.js'

//create Tag
const createTag = asyncHandler(async (req, res) => {
  console.log('create tag triggered')
  const { tagName, postID } = req.body
  const tag = await Tag.create({
    tagName,
    postID,
  })
  if (!tag) {
    throw new ApiError(500, 'Error occured while creating tag')
  }

  res.status(200).json(new ApiResponse(200, tag, 'Tag created for post !'))
})

//list all the tags for the post
const getTags = asyncHandler(async (req, res) => {
  const { postID } = req.body
  if (!postID) {
    throw new ApiError(404, 'Post ID is required!')
  }
  const tagsForPost = await Tag.find({ postID })
  res.status(200).json(200, tagsForPost)
})

//list all post for a tag
const getPostByTag = asyncHandler(async (req, res) => {
  const { tagName } = req.body
  if (!tagName) {
    throw new ApiError(404, 'Tag Name cannot be empty!')
  }
  const posts = await Tag.aggregate([
    {
      $match: { tagName: tagName },
    },
    {
      $lookup: {
        from: 'posts',
        localField: 'postID',
        foreignField: '_id',
        as: 'posts',
      },
    },
  ])
})

export { createTag, getTags, getPostByTag  }
