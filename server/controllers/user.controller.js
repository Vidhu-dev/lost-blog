import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { User } from '../models/user.models.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import jwt from 'jsonwebtoken'

const generateAccessAndRefreshTokens = async (userID) => {
  try {
    const user = await User.findById(userID)
    const accessToken = user.generateAccessToken()
    const refreshToken = user.generateRefreshToken()

    user.refreshToken = refreshToken
    await user.save({ validateBeforeSave: false })
    return { accessToken, refreshToken }
  } catch (error) {
    throw new ApiError(
      500,
      'Something went wrong while generating acces and refresh token'
    )
  }
}

const registerUser = asyncHandler(async (req, res) => {
  const { username, fullName, email, password } = req.body

  if (
    [username, fullName, email, password].some((field) => field?.trim() === '')
  ) {
    throw new ApiError(400, 'All fields are required!')
  }

  //username or email already exists in the database
  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  })

  if (existingUser) {
    throw new ApiError(
      400,
      'User with entered username or email already registered'
    )
  }

  // avatar and coverImage
  let avatarLocalPath
  if (
    req.files &&
    Array.isArray(req.files.avatar) &&
    req.files.avatar.length > 0
  ) {
    avatarLocalPath = req.files.avatar[0].path
  }
  if (!avatarLocalPath) {
    throw new ApiError(400, 'Avatar is required.')
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
    throw new ApiError(400, 'CoverImage is required.')
  }

  const avatar = await uploadOnCloudinary(avatarLocalPath)
  const coverImage = await uploadOnCloudinary(coverImageLocalPath)

  if (!avatar || !coverImage) {
    throw new ApiError(
      400,
      'Problem while uploading avatar or coverImage on Cloudinary'
    )
  }

  const user = await User.create({
    fullName,
    email,
    avatar: avatar.url,
    coverImage: coverImage.url,
    password,
    username: username.toLowerCase(),
  })

  const createdUser = await User.findById(user._id).select(
    '-password -refreshToken'
  )

  console.log(createdUser)
  if (!createdUser) {
    throw new ApiError(500, 'Something went wrong while registering the user')
  }
  return res
    .status(201)
    .json(new ApiResponse(201, createdUser, 'User registered sucessfully!'))
})

const loginUser = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body
  if (!password) {
    throw new ApiError('400', 'Passowrd is required')
  }
  if (!username || !email) {
    throw new ApiError(400, 'Username or password are required')
  }
  const user = await User.findOne({
    $or: [{ username, email }],
  })

  if (!user) {
    throw new ApiError(404, 'User does not exist')
  }

  const isPasswordValid = await user.isPasswordCorrect(password)
  if (!isPasswordValid) {
    throw new ApiError('401', 'Invalid user credentials')
  }

  //generate access token sand refresh token

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
    user._id
  )
  console
  const loggedInUser = await User.findById(user._id).select(
    '-password -refreshToken'
  )
  console.log('Tokens are:', accessToken, refreshToken)
  const options = {
    httpOnly: true,
    secure: true,
  }

  return res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          user: loggedInUser,
          accessToken,
          refreshToken,
        },
        'User logged in successfully'
      )
    )
})

const logoutUser = asyncHandler(async (req, res) => {
  const updateUser = User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: '' },
    },
    {
      new: true,
    }
  )


  const options = {
    httpOnly: true,
    secure: true,
  }
  console.log('Updated the user refreshToken for logout')
  res
    .status(200)
    .clearCookie('refreshToken', options)
    .clearCookie('accessToken', options)
    .json({ succes: true, message: 'User logged out successfully' })
})

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken = req.cookies.refreshToken
  if (!incomingRefreshToken) {
    throw new ApiError(401, 'Unauthorized request')
  }
  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    )
    const user = await User.findById(decodedToken._id)

    if (!user) {
      throw new ApiError(401, 'Invalid refresh token')
    }
    if (incomingRefreshToken !== user.refreshToken) {
      throw new ApiError(401, 'Refresh token is used or expired')
    }
    const { accessToken, refreshToken: newRefreshToken } =
      await generateAccessAndRefreshTokens(user._id)
    console.log(newRefreshToken)
    const options = {
      httpOnly: true,
      secure: true,
    }
    res
      .status(200)
      .cookie('refreshToken', newRefreshToken, options)
      .cookie('accessToken', accessToken, options)
      .json(
        new ApiResponse(
          200,
          {
            accessToken: accessToken,
            refreshToken: newRefreshToken,
          },
          'Access token refreshed successfully'
        )
      )
  } catch (error) {
    throw new ApiError(401, error.message || 'Invalid refresh token')
  }
})

export { registerUser, loginUser, logoutUser, refreshAccessToken }
