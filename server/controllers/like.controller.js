import { Like } from '../models/like.models.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/asyncHandler.js'
import { Post } from '../models/post.models.js'

const likePost = asyncHandler(async (req, res) => {
  const { postID } = req.body
  const likerID = req.body.user._id

  try {
    const likedPost = await Post.findByIdAndUpdate(
      postID,
      { $inc: { likes: 1 } },
      { new: true }
    )

    if (!likedPost) {
      throw new ApiError(404, 'Post not found')
    }

    const like = await Like.create({ postID, likerID })

    if (!like) {
      throw new ApiError(500, 'Error in handling like')
    }

    res
      .status(200)
      .json(new ApiResponse(200, like, 'Liked the post successfully'))
  } catch (error) {
    throw new ApiError(500, `Error incrementing likes: ${error.message}`)
  }
})

const unlikePost = asyncHandler(async (req, res) => {
  const { postID } = req.body
  const likerID = req.body.user._id

  try {
    const unlikedPost = await Post.findByIdAndUpdate(
      postID,
      { $inc: { likes: -1 } },
      { new: true }
    )

    if (!unlikedPost) {
      throw new ApiError(404, 'Post not found')
    }

    const like = await Like.findOneAndDelete({ postID, likerID })

    if (!like) {
      throw new ApiError(500, 'Error in handling unlike')
    }

    res
      .status(200)
      .json(new ApiResponse(200, like, 'Unliked the post successfully'))
  } catch (error) {
    throw new ApiError(500, `Error decrementing likes: ${error.message}`)
  }
})

export { likePost, unlikePost }
