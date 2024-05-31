import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { Post } from '../models/post.models.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/ApiResponse.js'
//create Post
const createPost = asyncHandler(async (req, res) => {
  console.log('Create Post triggred....')
  const { title, content, status, categoryID } = req.body
  if (!title || !categoryID || !status) {
    throw new ApiError(
      401,
      'Author, title, status and category cannot be empty!'
    )
  }
  let coverImageLocalPath
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    coverImageLocalPath = req.files.coverImage[0].path
  }
  if (!coverImageLocalPath) {
    throw new ApiError(401, 'Cover image is required!')
  }

  //upload the image on cloudinary and get the url
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)
  if (!coverImage) {
    throw new ApiError(
      401,
      'Some error occurred while uploading cover image to cloduinary'
    )
  }

  const post = await Post.create({
    authorID: req.user._id,
    title,
    content,
    categoryID,
    coverImage,
    status,
  })

  if (!post) {
    throw new ApiError(500, 'Some error occurred while storing post')
  }
  res.status(201).json(new ApiResponse(201, post, 'Post saved successfully'))
})

// Edit Post
const changePostCoverImage = asyncHandler(async (req, res) => {
  const { postID } = req.body
  const post = await Post.findById(postID)
  if (!post) {
    throw new ApiError(404, 'Post not found')
  }
  let newCoverImageLocalPath
  if (
    req.files &&
    Array.isArray(req.files.coverImage) &&
    req.files.coverImage.length > 0
  ) {
    newCoverImageLocalPath = req.files.coverImage[0].path
  }
  if (!newCoverImageLocalPath) {
    throw new ApiError(401, 'Cover image is required!')
  }
  const newCoverImage = await uploadOnCloudinary(newCoverImageLocalPath)
  if (!newCoverImage) {
    throw new ApiError(401, 'Error while uploading cover image to cloudinary')
  }
  const updatedPost = await Post.findByIdAndUpdate(
    postID,
    {
      $set: {
        coverImage: newCoverImage,
      },
    },
    {
      new: true,
    }
  )
  res
    .status(200)
    .json(
      new ApiResponse(200, updatedPost, 'Post cover image updated successfully')
    )
})

// modify post status
// ['draft', 'scheduled', 'published', 'archived',],
//1. Draft
//2. Scheduled
//3. Published
//4. archived
const updatePostField = asyncHandler(async (req, res) => {
  const { postID, newValue, item } = req.body

  if (!postID || !newValue || !item) {
    throw new ApiError(
      400,
      'Post ID, new value, and item to update must be provided'
    )
  }

  const updatedPost = await Post.findByIdAndUpdate(
    postID,
    { $set: { item: newValue } },
    { new: true }
  )

  if (!updatedPost) {
    throw new ApiError(404, 'Post not found!')
  }

  res
    .status(200)
    .json(
      new ApiResponse(200, updatedPost, `Post ${item} updated successfully`)
    )
})

//delete Post
const deletePost = asyncHandler(async (req, res) => {
  const { postID } = req.body
  if (!postID) {
    throw new ApiError(400, 'Post ID must be provided')
  }
  const deletedPost = await Post.findByIdAndDelete(postID)
  if (!deletedPost) {
    throw new ApiError(404, 'Post not found')
  }
  res.status(200).json(new ApiResponse(200, 'Post deleted successfully'))
})

//get post

const getPost = asyncHandler(async (req, res) => {
  const { postID } = req.body

  try {
    const post = await Post.findById(postID)

    if (!post) {
      throw new ApiError(404, 'Post not found')
    }

    res
      .status(200)
      .json(new ApiResponse(200, post, 'Post fetched successfully'))
  } catch (error) {
    throw new ApiError(500, `Error fetching post: ${error.message}`)
  }
})

// list all Posts
const getAllPost = asyncHandler(async (req, res) => {
  const posts = await Post.find({})
  if (posts.length === 0) {
    throw new ApiError(404, 'No post found')
  }
  res
    .status(200)
    .json(new ApiResponse(200, posts, 'All posts retrieved successfully'))
})

//list post by user
const getPostsByUser = asyncHandler(async (req, res) => {
  const { userID } = req.body
  const posts = await Post.find({ userID }).exec()
  if (posts === 0) {
    throw new ApiError(404, 'No post found')
  }
  res
    .status(200)
    .json(new ApiResponse(200, posts, 'All posts retrieved successfully'))
})

//list post by category
const getPostsByCategory = asyncHandler(async (req, res) => {
  const { categoryID } = req.body
  const posts = await Post.find({ categoryID }).exec()

  if (posts.length === 0) {
    throw new ApiError(404, 'No posts found for this category')
  }

  res
    .status(200)
    .json(new ApiResponse(200, posts, 'Posts retrieved successfully'))
})

export {
  createPost,
  changePostCoverImage,
  updatePostField,
  deletePost,
  getAllPost,
  getPostsByUser,
  getPostsByCategory,
  getPost
}
