import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js'
import { User } from '../models/user.models.js'
import {
  getRandomAvatarURL,
  getRandomCoverImageURL,
  uploadOnCloudinary,
} from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/ApiResponse.js'
import jwt from 'jsonwebtoken'
import { generateUsername } from 'friendly-username-generator'

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

const generateUniqueUsername = async (maxAttempts = 10) => {
  let username
  let attempts = 0

  do {
    username = generateUsername()
    attempts++
    if (attempts >= maxAttempts) {
      throw new Error('Unable to generate a unique username')
    }
  } while (await User.exists({ username }))

  return username
}

const registerUser = asyncHandler(async (req, res) => {
  try {
    console.log('Registering user...')
    const { fullName, email, password } = req.body
    console.log({ fullName, email, password })

    if (
      [fullName, email, password].some(
        (field) => field == null || field.trim() === ''
      )
    ) {
      throw new ApiError(400, 'All fields are required!')
    }

    // Check for existing user
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      throw new ApiError(
        400,
        'User with entered username or email already registered'
      )
    }

    const avatar = await getRandomAvatarURL()
    const coverImage = await getRandomCoverImageURL()

    if (!avatar || !coverImage) {
      throw new ApiError(
        500,
        'Problem while getting avatar or coverImage from Cloudinary'
      )
    }

    let username
    try {
      username = await generateUniqueUsername()
    } catch (error) {
      throw new ApiError(
        500,
        'Unable to generate a unique username. Please try again.'
      )
    }

    const user = await User.create({
      fullName,
      email,
      avatar: avatar,
      coverImage: coverImage,
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
      .json(
        new ApiResponse(
          201,
          { user: createdUser },
          'User registered successfully!'
        )
      )
  } catch (error) {
    console.log(error)
    console.log(error.message)
    res
      .status(error.messageCode || 500)
      .json(new ApiResponse(error.messageCode || 500, null, error.message))
  }
})

const loginUser = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body
  console.log({ username, password, email })
  try {
    if (!password) {
      throw new ApiError('400', 'Passowrd is required')
    }
    if (!username && !email) {
      throw new ApiError(400, 'Username or email is required')
    }
    const user = await User.findOne({
      $or: [{ username }, { email }],
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

    const loggedInUser = await User.findById(user._id).select(
      '-password -refreshToken'
    )
    console.log(loggedInUser)
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
  } catch (error) {
    console.log(error)
    console.log(error.message)
    res
      .status(error.messageCode || 500)
      .json(new ApiResponse(error.messageCode || 500, null, error.message))
  }
})

const logoutUser = asyncHandler(async (req, res) => {
  console.log('loggind out user...')
  console.log(req.body)
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
// // avatar and coverImage
// let avatarLocalPath
// if (
//   req.files &&
//   Array.isArray(req.files.avatar) &&
//   req.files.avatar.length > 0
// ) {
//   avatarLocalPath = req.files.avatar[0].path
// }
// if (!avatarLocalPath) {
//   throw new ApiError(400, 'Avatar is required.')
// }
// let coverImageLocalPath
// if (
//   req.files &&
//   Array.isArray(req.files.coverImage) &&
//   req.files.coverImage.length > 0
// ) {
//   coverImageLocalPath = req.files.coverImage[0].path
// }
// if (!coverImageLocalPath) {
//   throw new ApiError(400, 'CoverImage is required.')
// }

// const avatar = await uploadOnCloudinary(avatarLocalPath)
// const coverImage = await uploadOnCloudinary(coverImageLocalPath)
