import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { Post } from '../models/post.models.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import mongoose from 'mongoose'
//create Post
const createPost = asyncHandler(async (req, res) => {
  console.log('Create Post triggred....')
  console.log(JSON.parse(req.body.post))
  const { title, content, status, categoryID } = JSON.parse(req.body.post)
  const summary = req.body.postSummary
  console.log(summary)
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
    coverImage: coverImage.url,
    status,
    likes: 0,
    summary,
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
        coverImage: newCoverImage.url,
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

const getPost = asyncHandler(async (req, res) => {
  const postId = req.params.id
  console.log('Fetching post with ID:', postId)

  try {
    const post = await Post.aggregate([
      { $match: { _id: new mongoose.Types.ObjectId(postId) } },

      {
        $lookup: {
          from: 'users',
          localField: 'authorID',
          foreignField: '_id',
          as: 'authorDetails',
        },
      },
      { $unwind: '$authorDetails' },

      {
        $lookup: {
          from: 'categories',
          localField: 'categoryID',
          foreignField: '_id',
          as: 'categoryDetails',
        },
      },
      { $unwind: '$categoryDetails' },
    ])

    if (!post || post.length === 0) {
      throw new ApiError(404, 'Post not found')
    }
console.log(post)
    res
      .status(200)
      .json(new ApiResponse(200, post[0], 'Post fetched successfully'))
  } catch (error) {
    console.error(`Error fetching post: ${error.message}`)
    throw new ApiError(500, `Error fetching post: ${error.message}`)
  }
})

// list all Posts
const getAllPost = asyncHandler(async (req, res) => {
  const posts = await Post.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'authorID',
        foreignField: '_id',
        as: 'authorDetails',
      },
    },

    { $unwind: '$authorDetails' },

    {
      $lookup: {
        from: 'categories',
        localField: 'categoryID',
        foreignField: '_id',
        as: 'categoryDetails',
      },
    },

    { $unwind: '$categoryDetails' },
  ])
  if (posts.length === 0) {
    throw new ApiError(404, 'No post found')
  }
  console.log(posts)
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

const getTopRatedPosts = asyncHandler(async (req, res) => {
  try {
    // Fetch 3 random posts and join them with authors (users) and categories
    const randomPosts = await Post.aggregate([
      { $sample: { size: 3 } },

      {
        $lookup: {
          from: 'users',
          localField: 'authorID',
          foreignField: '_id',
          as: 'authorDetails',
        },
      },

      { $unwind: '$authorDetails' },

      {
        $lookup: {
          from: 'categories',
          localField: 'categoryID',
          foreignField: '_id',
          as: 'categoryDetails',
        },
      },

      { $unwind: '$categoryDetails' },
    ])

    if (!randomPosts || randomPosts.length === 0) {
      throw new ApiError(404, 'No posts found')
    }

    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          randomPosts,
          'Top rated posts fetched successfully'
        )
      )
  } catch (error) {
    console.error(error)
    return res
      .status(error.statusCode || 500)
      .json(new ApiResponse(error.statusCode || 500, null, error.message))
  }
})

export {
  getTopRatedPosts,
  createPost,
  changePostCoverImage,
  updatePostField,
  deletePost,
  getAllPost,
  getPostsByUser,
  getPostsByCategory,
  getPost,
}
