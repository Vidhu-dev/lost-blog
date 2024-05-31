import { Comment } from '../models/comment.models.js'
import { ApiError } from '../utils/ApiError.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import { asyncHandler } from '../utils/asyncHandler.js'

const comment = asyncHandler(async (req, res) => {
  const { postID, content, parentCommentID } = req.body
  const commentorID = req.body.user._id
  try {
    const comment = await Comment.create({
      postID,
      content,
      parentCommentID,
      commentorID,
    })
    res
      .status(200)
      .json(new ApiResponse(200, comment, 'Comment saved successfully!'))
  } catch (error) {
    throw new ApiError(500, 'Error while saving comment')
  }
})

const deleteComment = asyncHandler(async (req, res) => {
  const { commentID } = req.body

  try {
    const deletedComment = await Comment.findByIdAndDelete(commentID)

    if (!deletedComment) {
      throw new ApiError(404, 'Comment not found')
    }

    res
      .status(200)
      .json(
        new ApiResponse(200, deletedComment, 'Comment deleted successfully!')
      )
  } catch (error) {
    throw new ApiError(500, `Error while deleting comment: ${error.message}`)
  }
})

const getAllPostComments = asyncHandler(async (req, res) => {
  const { postID } = req.body
  try {
    const comments = await Comment.find({ postID })
    res
      .status(200)
      .json(new ApiResponse(200, comments, 'Comment retrived successfully'))
  } catch (error) {
    throw new ApiError(500, `Error while getting comments`, error)
  }
})

export { comment, deleteComment, getAllPostComments }
